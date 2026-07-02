// AWS Lambda handler for the contact form, behind a Lambda Function URL.
// The browser POSTs the form here; this calls Attio server-side so the
// ATTIO_API_KEY never reaches the client. Node 20 runtime (global fetch).
//
// Env vars:
//   ATTIO_API_KEY    (required) — Attio workspace API key. Store in Lambda env or
//                    Secrets Manager; NEVER expose to the browser.
//   ALLOWED_ORIGINS  (optional) — comma-separated allowed origins for CORS, e.g.
//                    "https://www.associum.ai,https://staging.associum.ai".
//                    Defaults to "*" if unset (tighten this in production).
//
// Function URL config: Auth type NONE (it's a public form endpoint). Optionally
// add a WAF rate-limit rule in front to deter abuse/spam.

const ALLOWED = (process.env.ALLOWED_ORIGINS || '*')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

function corsHeaders(origin) {
  const allowOrigin =
    ALLOWED.includes('*') ? '*' : ALLOWED.includes(origin) ? origin : ALLOWED[0] || '';
  return {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  };
}

function json(statusCode, body, origin) {
  return {
    statusCode,
    headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
    body: JSON.stringify(body),
  };
}

// E.164-ish normalization, preserved from the original handler.
function sanitizePhone(phone) {
  if (!phone) return '';
  const cleanDigits = String(phone).trim().replace(/[^\d+]/g, '');
  if (cleanDigits.startsWith('+')) return cleanDigits;
  if (cleanDigits.length === 12 && cleanDigits.startsWith('91')) return `+${cleanDigits}`;
  if (cleanDigits.length === 11 && cleanDigits.startsWith('1')) return `+${cleanDigits}`;
  if (cleanDigits.length === 10) return `+91${cleanDigits}`; // default to India prefix
  return `+${cleanDigits}`;
}

export const handler = async (event) => {
  const origin = event?.headers?.origin || event?.headers?.Origin || '';
  const method = event?.requestContext?.http?.method || 'POST';

  // CORS preflight
  if (method === 'OPTIONS') {
    return { statusCode: 204, headers: corsHeaders(origin), body: '' };
  }
  if (method !== 'POST') {
    return json(405, { error: 'Method not allowed' }, origin);
  }

  let payload;
  try {
    const raw = event.isBase64Encoded
      ? Buffer.from(event.body || '', 'base64').toString('utf8')
      : event.body || '{}';
    payload = JSON.parse(raw);
  } catch {
    return json(400, { error: 'Invalid JSON body' }, origin);
  }

  const { name, email, phone, company, role, inquiryType, message } = payload;
  if (!email || !name) {
    return json(400, { error: 'Missing required fields' }, origin);
  }

  const ATTIO_API_KEY = process.env.ATTIO_API_KEY;
  if (!ATTIO_API_KEY) {
    console.error('ATTIO_API_KEY is not set');
    return json(500, { error: 'Server configuration error' }, origin);
  }

  const sanitizedPhone = sanitizePhone(phone);
  const authHeaders = {
    Authorization: `Bearer ${ATTIO_API_KEY}`,
    'Content-Type': 'application/json',
  };

  // One shared Lambda serves both environments. Each CloudFront distribution
  // stamps an `X-Associum-Env` header, so non-production submissions are labeled
  // (e.g. "Website Contact Form (staging)") to keep test leads identifiable.
  const envName = (event?.headers?.['x-associum-env'] || '').toLowerCase();
  const leadSource =
    envName && envName !== 'production'
      ? `Website Contact Form (${envName})`
      : 'Website Contact Form';

  try {
    // 1. Assert Person (create or update, matched on email).
    // https://developers.attio.com/reference/assert-record
    const personResponse = await fetch(
      'https://api.attio.com/v2/objects/people/records?matching_attribute=email_addresses',
      {
        method: 'PUT',
        headers: authHeaders,
        body: JSON.stringify({
          data: {
            values: {
              name,
              email_addresses: [{ email_address: email }],
              phone_numbers: sanitizedPhone
                ? [{ original_phone_number: sanitizedPhone, country_code: null }]
                : [],
              lead_source: leadSource,
            },
          },
        }),
      }
    );

    const personData = await personResponse.json();
    if (!personResponse.ok) {
      console.error('Attio Person Error:', personData);
      const errMsg =
        personData.message || personData.errors?.[0]?.message || JSON.stringify(personData);
      throw new Error(`Attio API Error: ${errMsg}`);
    }

    const personId = personData.data.id.record_id;

    // 2. Attach a Note with the inquiry details.
    // https://developers.attio.com/reference/create-a-note
    const noteResponse = await fetch('https://api.attio.com/v2/notes', {
      method: 'POST',
      headers: authHeaders,
      body: JSON.stringify({
        data: {
          parent_object: 'people',
          parent_record_id: personId,
          title: `Inquiry: ${inquiryType}`,
          format: 'plaintext',
          content: `
Inquiry Type: ${inquiryType}
Company: ${company}
Role: ${role}
Phone: ${sanitizedPhone || '-'}

Message:
${message}
          `.trim(),
        },
      }),
    });

    if (!noteResponse.ok) {
      const noteError = await noteResponse.json();
      console.error('Attio Note Error:', noteError);
      const noteErrMsg =
        noteError.message || noteError.errors?.[0]?.message || JSON.stringify(noteError);
      throw new Error(`Person created, but Note failed: ${noteErrMsg}`);
    }

    return json(200, { success: true, message: 'Inquiry received' }, origin);
  } catch (error) {
    console.error('Attio Integration Error:', error);
    return json(500, { error: error.message || 'Failed to process inquiry. Please try again later.' }, origin);
  }
};
