import React from 'react';
import { Container } from './Container';
import styles from './ContactSupportSection.module.scss';

import chevronDown from '../assets/contact/contact-chevron-down.svg?url';
import salesIcon from '../assets/contact/contact-sales-icon.svg?url';
import linkedinIcon from '../assets/contact/contact-linkedin-icon.svg?url';
import xIcon from '../assets/contact/contact-x-icon.svg?url';
import { motion, AnimatePresence } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function ContactField({
  label,
  placeholder,
  type = 'text',
  textarea = false,
  dropdown = false,
  className = '',
  required = false,
  value,
  onChange,
  onBlur,
  error = '',
  options = [],
}) {
  return (
    <label className={`${styles.field} ${className}`.trim()}>
      <span className={styles.label}>
        {label}
        {required ? <span className={styles.required}>*</span> : null}
      </span>
      {textarea ? (
        <textarea
          className={`${styles.textarea} ${error ? styles.controlError : ''}`}
          placeholder={placeholder}
          rows={5}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      ) : dropdown ? (
        <div className={styles.selectWrap}>
          <select
            className={`${styles.select} ${error ? styles.controlError : ''} ${value ? styles.selectHasValue : ''}`}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <img src={chevronDown} alt="" aria-hidden="true" className={styles.chevron} />
        </div>
      ) : (
        <input
          className={`${styles.input} ${error ? styles.controlError : ''}`}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}
      {error ? <span className={styles.errorText}>{error}</span> : null}
    </label>
  );
}

export function ContactSupportSection() {
  const [formValues, setFormValues] = React.useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    inquiryType: '',
    message: '',
    consent: false,
  });
  const [touchedFields, setTouchedFields] = React.useState({
    name: false,
    email: false,
    phone: false,
    company: false,
    role: false,
    inquiryType: false,
    message: false,
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const emailValue = formValues.email.trim();
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
  const emailHasValue = emailValue.length > 0;
  const nameValue = formValues.name.trim();
  const phoneValue = formValues.phone.trim();
  const messageValue = formValues.message.trim();
  const companyValue = formValues.company.trim();
  const roleValue = formValues.role.trim();
  const inquiryTypeValue = formValues.inquiryType.trim();

  const nameError =
    touchedFields.name && nameValue.length === 0 ? 'Name is required.' : '';
  const emailError =
    touchedFields.email && !emailHasValue
      ? 'Email is required.'
      : touchedFields.email && !emailValid
        ? 'Please enter a valid email address.'
        : '';
  const phoneError =
    touchedFields.phone && phoneValue.length === 0 ? 'Phone number is required.' : '';
  const companyError =
    touchedFields.company && companyValue.length === 0 ? 'Company is required.' : '';
  const roleError =
    touchedFields.role && roleValue.length === 0 ? 'Role is required.' : '';
  const inquiryTypeError =
    touchedFields.inquiryType && inquiryTypeValue.length === 0 ? 'Please select an inquiry type.' : '';
  const messageError = '';

  const isFormValid =
    nameValue.length > 0 &&
    emailHasValue &&
    emailValid &&
    phoneValue.length > 0 &&
    companyValue.length > 0 &&
    roleValue.length > 0 &&
    inquiryTypeValue.length > 0 &&
    formValues.consent;

  const handleFieldChange = (field) => (event) => {
    const { value, type, checked } = event.target;
    setFormValues((current) => ({
      ...current,
      [field]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFieldBlur = (field) => () => {
    if (!(field in touchedFields)) return;

    setTouchedFields((current) => ({
      ...current,
      [field]: true,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);

    try {
      // Same-origin endpoint: CloudFront routes /api/contact to the contact
      // Lambda (Function URL origin) that calls Attio server-side, so the API key
      // never reaches the browser and there's no CORS. Lambda source:
      // lambda/contact/index.mjs. See DEPLOYMENT.md → "Contact form".
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      let data = {};
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        throw new Error('The contact form is not connected yet. Please email us directly in the meantime.');
      }

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
      alert(error.message || 'Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.section} aria-labelledby="contact-support-title">
      <Container>
        <motion.div
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <div className={styles.infoColumn}>
            <motion.div className={styles.intro} variants={itemVariants}>
              <h2 id="contact-support-title">How can we help?</h2>
              <p>
                Need help getting started, have a technical question, or want to share feedback?
                Our support team is ready to assist.
              </p>
            </motion.div>

            <motion.article className={styles.salesCard} variants={itemVariants}>
              <div className={styles.salesHeader}>
                <img src={salesIcon} alt="" aria-hidden="true" className={styles.salesIcon} />
                <h3>Sales</h3>
              </div>

              <p className={styles.salesCopy}>
                Interested in Associum for your organization? Fill out the form and our team will guide you through
                enterprise features and help find the right solution for your needs.
              </p>
            </motion.article>

            <motion.div className={styles.socialBlock} variants={itemVariants}>
              <h3>More ways to connect</h3>
              <div className={styles.socials}>
                <a href="https://www.linkedin.com/company/associumai/about/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <img src={linkedinIcon} alt="" aria-hidden="true" />
                </a>
                <a href="https://x.com/AssociumAI" target="_blank" rel="noopener noreferrer" aria-label="X">
                  <img src={xIcon} alt="" aria-hidden="true" />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div className={styles.formCard} variants={itemVariants}>
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  className={styles.form}
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={styles.fields}>
                    <ContactField
                      label="Name"
                      placeholder="Jane Smith"
                      required
                      value={formValues.name}
                      onChange={handleFieldChange('name')}
                      onBlur={handleFieldBlur('name')}
                      error={nameError}
                    />
                    <ContactField
                      label="Email"
                      placeholder="jane@superior.com"
                      type="email"
                      required
                      value={formValues.email}
                      onChange={handleFieldChange('email')}
                      onBlur={handleFieldBlur('email')}
                      error={emailError}
                    />

                    <div className={styles.row}>
                      <ContactField
                        label="Company"
                        placeholder="Superior"
                        required
                        className={styles.rowField}
                        value={formValues.company}
                        onChange={handleFieldChange('company')}
                        onBlur={handleFieldBlur('company')}
                        error={companyError}
                      />
                      <ContactField
                        label="Phone"
                        placeholder="+1 (555) 000-0000"
                        required
                        className={styles.rowField}
                        value={formValues.phone}
                        onChange={handleFieldChange('phone')}
                        onBlur={handleFieldBlur('phone')}
                        error={phoneError}
                      />
                    </div>

                    <div className={styles.row}>
                      <ContactField
                        label="Role"
                        placeholder="Research Analyst"
                        required
                        className={styles.rowField}
                        value={formValues.role}
                        onChange={handleFieldChange('role')}
                        onBlur={handleFieldBlur('role')}
                        error={roleError}
                      />
                      <ContactField
                        label="Inquiry Type"
                        placeholder="Select Inquiry Type"
                        required
                        dropdown
                        className={styles.rowField}
                        value={formValues.inquiryType}
                        onChange={handleFieldChange('inquiryType')}
                        onBlur={handleFieldBlur('inquiryType')}
                        options={['Team Plan Inquiry', 'Request Call', 'Feedback', 'General Question']}
                        error={inquiryTypeError}
                      />
                    </div>

                    <ContactField
                      label="Message"
                      placeholder="I need help with..."
                      textarea
                      value={formValues.message}
                      onChange={handleFieldChange('message')}
                      onBlur={handleFieldBlur('message')}
                      error={messageError}
                    />

                    <div className={styles.consentRow}>
                      <label className={styles.checkboxField}>
                        <input
                          type="checkbox"
                          className={styles.checkboxInput}
                          checked={formValues.consent}
                          onChange={handleFieldChange('consent')}
                        />
                        <span className={styles.checkboxText}>
                          I agree to be contacted by Associum
                        </span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className={`${styles.submitButton} ${!isFormValid || isSubmitting ? styles.submitButtonDisabled : ''}`}
                    disabled={!isFormValid || isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className={styles.loaderWrapper}>
                        <span className={styles.spinner} />
                        Sending...
                      </span>
                    ) : (
                      'Submit'
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  className={styles.successView}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className={styles.successIcon}>
                    <svg
                      width="64"
                      height="64"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="32" cy="32" r="32" fill="#E8F9F3" />
                      <path
                        d="M20 32.5L28 40.5L44 24.5"
                        stroke="#08C186"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3>Message Sent</h3>
                  <p>
                    Thank you for reaching out. A member of our team will get back to you
                    shortly.
                  </p>
                  <button
                    type="button"
                    className={styles.resetButton}
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormValues({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        role: '',
                        inquiryType: '',
                        message: '',
                        consent: false,
                      });
                      setTouchedFields({
                        name: false,
                        email: false,
                        phone: false,
                        company: false,
                        role: false,
                        inquiryType: false,
                        message: false,
                      });
                    }}
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
