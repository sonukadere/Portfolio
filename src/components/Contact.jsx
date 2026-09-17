import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Send, 
  CheckCircle2, AlertCircle, Clock, Loader2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import './Contact.css';

export default function Contact({ data }) {
  const { personal } = data;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [apiNotice, setApiNotice] = useState('');

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email format';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setApiNotice('');

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    // If Web3Forms Access Key is provided in .env, send in background directly
    if (accessKey && accessKey.trim() !== '') {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: accessKey.trim(),
            name: formData.name.trim(),
            email: formData.email.trim(),
            subject: formData.subject.trim() || `Portfolio Contact from ${formData.name.trim()}`,
            message: formData.message.trim(),
            from_name: `${formData.name.trim()} (Portfolio Visitor)`
          })
        });

        const result = await response.json();

        if (result.success) {
          setSubmitting(false);
          setSubmitted(true);
          setFormData({ name: '', email: '', subject: '', message: '' });
          return;
        }
      } catch (err) {
        console.error('Direct submission error:', err);
      }
    }

    // Graceful fallback to user mail client
    const subject = encodeURIComponent(formData.subject.trim() || `Portfolio Contact from ${formData.name.trim()}`);
    const body = encodeURIComponent(
      `Hi Sonu,\n\nName: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\nSubject: ${formData.subject.trim() || 'General Inquiry'}\n\nMessage:\n${formData.message.trim()}`
    );

    setTimeout(() => {
      window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 500);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Get In Touch</div>
          <h2 className="section-title">
            Let's Discuss <span className="gradient-green">New Opportunities</span>
          </h2>
          <p className="section-subtitle">
            Whether you have an open engineering role, a project inquiry, or just want to connect, my inbox is always open.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Info & Social Channels */}
          <div className="contact-info-panel">
            <h3 className="info-panel-title">Contact Channels</h3>
            <p className="info-panel-desc">
              I am currently open to full-time roles, contracts, and frontend/full-stack collaborations.
            </p>

            <div className="contact-cards-list">
              {/* Email */}
              <a href={`mailto:${personal.email}`} className="contact-info-card">
                <div className="contact-icon-box">
                  <Mail size={20} />
                </div>
                <div className="contact-text-box">
                  <span className="contact-channel-label">Email</span>
                  <span className="contact-channel-value">{personal.email}</span>
                </div>
              </a>

              {/* Phone (if provided or placeholder) */}
              {personal.phone && (
                <a href={`tel:${personal.phone}`} className="contact-info-card">
                  <div className="contact-icon-box phone">
                    <Phone size={20} />
                  </div>
                  <div className="contact-text-box">
                    <span className="contact-channel-label">Phone</span>
                    <span className="contact-channel-value">{personal.phone}</span>
                  </div>
                </a>
              )}

              {/* Location */}
              <div className="contact-info-card non-link">
                <div className="contact-icon-box location">
                  <MapPin size={20} />
                </div>
                <div className="contact-text-box">
                  <span className="contact-channel-label">Location</span>
                  <span className="contact-channel-value">{personal.location}</span>
                </div>
              </div>
            </div>

            {/* Social Connect Strip */}
            <div className="contact-socials-block">
              <span className="socials-block-label">Professional Networks</span>
              <div className="socials-buttons-row">
                {personal.githubUrl && (
                  <a 
                    href={personal.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-btn github"
                  >
                    <GithubIcon size={18} />
                    <span>GitHub</span>
                  </a>
                )}
                {personal.linkedinUrl && (
                  <a 
                    href={personal.linkedinUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-btn linkedin"
                  >
                    <LinkedinIcon size={18} />
                    <span>LinkedIn</span>
                  </a>
                )}
              </div>
            </div>

            {/* Response Time Badge */}
            <div className="response-time-pill">
              <Clock size={16} className="clock-icon" />
              <span>Typical response time: within 24 hours</span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-panel">
            {submitted ? (
              <div className="form-success-message">
                <div className="success-icon-box">
                  <CheckCircle2 size={42} />
                </div>
                <h3 className="success-title">Message Received!</h3>
                <p className="success-desc">
                  Thank you for reaching out! Your message was sent to <strong>{personal.email}</strong>. I will reply to you as soon as possible.
                </p>
                <button 
                  type="button" 
                  className="btn btn-primary btn-sm"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Your Name <span className="req">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Connor"
                      className={`form-input ${errors.name ? 'error' : ''}`}
                    />
                    {errors.name && (
                      <span className="error-message">
                        <AlertCircle size={13} /> {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Your Email <span className="req">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. sarah@example.com"
                      className={`form-input ${errors.email ? 'error' : ''}`}
                    />
                    {errors.email && (
                      <span className="error-message">
                        <AlertCircle size={13} /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject / Role Title
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Frontend Developer Position / Inquiry"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <div className="label-counter-row">
                    <label htmlFor="message" className="form-label">
                      Message <span className="req">*</span>
                    </label>
                    <span className="char-counter">
                      {formData.message.length} chars
                    </span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, team, or opportunity..."
                    className={`form-textarea ${errors.message ? 'error' : ''}`}
                  ></textarea>
                  {errors.message && (
                    <span className="error-message">
                      <AlertCircle size={13} /> {errors.message}
                    </span>
                  )}
                </div>

                {apiNotice && (
                  <div className="form-api-notice">
                    <AlertCircle size={14} />
                    <span>{apiNotice}</span>
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={submitting} 
                  className="btn btn-primary submit-btn"
                >
                  {submitting ? (
                    <>
                      <Loader2 size={18} className="spin-icon" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
