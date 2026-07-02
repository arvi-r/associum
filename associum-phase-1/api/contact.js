export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, company, role, inquiryType, message } = req.body;

  if (!email || !name) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Sanitize phone number to strictly conform to E.164 international format
  let sanitizedPhone = '';
  if (phone) {
    const cleanDigits = phone.trim().replace(/[^\d+]/g, '');
    if (cleanDigits.startsWith('+')) {
      sanitizedPhone = cleanDigits;
    } else {
      if (cleanDigits.length === 12 && cleanDigits.startsWith('91')) {
        sanitizedPhone = `+${cleanDigits}`;
      } else if (cleanDigits.length === 11 && cleanDigits.startsWith('1')) {
        sanitizedPhone = `+${cleanDigits}`;
      } else if (cleanDigits.length === 10) {
        sanitizedPhone = `+91${cleanDigits}`; // Default to India prefix (+91)
      } else {
        sanitizedPhone = `+${cleanDigits}`; // Fallback prefix
      }
    }
  }

  const ATTIO_API_KEY = process.env.ATTIO_API_KEY;

  if (!ATTIO_API_KEY) {
    console.error('ATTIO_API_KEY is not set');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    // 1. Assert Person (Create or Update based on email)
    // Documentation: https://developers.attio.com/reference/assert-record
    const personResponse = await fetch('https://api.attio.com/v2/objects/people/records?matching_attribute=email_addresses', {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${ATTIO_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: {
          values: {
            name: name,
            email_addresses: [{ email_address: email }],
            phone_numbers: sanitizedPhone ? [{ original_phone_number: sanitizedPhone, country_code: null }] : [],
            lead_source: "Website Contact Form"
          }
        }
      })
    });

    const personData = await personResponse.json();

    if (!personResponse.ok) {
      console.error('Attio Person Error:', personData);
      const errMsg = personData.message || personData.errors?.[0]?.message || JSON.stringify(personData);
      throw new Error(`Attio API Error: ${errMsg}`);
    }

    const personId = personData.data.id.record_id;

    // 2. Create a Note with the message and inquiry details
    // Documentation: https://developers.attio.com/reference/create-a-note
    const noteResponse = await fetch('https://api.attio.com/v2/notes', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${ATTIO_API_KEY}`,
        'Content-Type': 'application/json'
      },
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
          `.trim()
        }
      })
    });

    if (!noteResponse.ok) {
      const noteError = await noteResponse.json();
      console.error('Attio Note Error:', noteError);
      const noteErrMsg = noteError.message || noteError.errors?.[0]?.message || JSON.stringify(noteError);
      throw new Error(`Person created, but Note failed: ${noteErrMsg}`);
    }

    return res.status(200).json({ success: true, message: 'Inquiry received' });

  } catch (error) {
    console.error('Attio Integration Error:', error);
    return res.status(500).json({ error: error.message || 'Failed to process inquiry. Please try again later.' });
  }
}
