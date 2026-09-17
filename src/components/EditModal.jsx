import React, { useState } from 'react';
import { X, Save, RotateCcw, Copy, Check, Sparkles, Code2 } from 'lucide-react';
import './EditModal.css';

export default function EditModal({ isOpen, onClose, data, onSave, onReset }) {
  const [formData, setFormData] = useState({
    name: data?.personal?.name || '',
    title: data?.personal?.title || '',
    location: data?.personal?.location || '',
    email: data?.personal?.email || '',
    phone: data?.personal?.phone || '',
    githubUrl: data?.personal?.githubUrl || '',
    linkedinUrl: data?.personal?.linkedinUrl || '',
    resumeUrl: data?.personal?.resumeUrl || '',
    badgeText: data?.personal?.badgeText || '',
    subheadline: data?.personal?.subheadline || ''
  });

  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleApply = (e) => {
    e.preventDefault();
    onSave({
      ...data,
      personal: {
        ...data.personal,
        ...formData
      }
    });
    onClose();
  };

  const handleCopyJSON = () => {
    const jsonStr = JSON.stringify(formData, null, 2);
    navigator.clipboard.writeText(jsonStr);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="edit-modal-backdrop" onClick={onClose}>
      <div className="edit-modal-window" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="edit-modal-header">
          <div className="header-title-box">
            <Sparkles size={20} className="sparkle-icon" />
            <div>
              <h3 className="edit-modal-title">Live Portfolio Data Customizer</h3>
              <p className="edit-modal-subtitle">
                Customize your name, links, and contact info live in the browser.
              </p>
            </div>
          </div>
          <button 
            type="button" 
            className="edit-close-btn"
            onClick={onClose}
            aria-label="Close Customizer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleApply} className="edit-modal-form">
          <div className="edit-fields-grid">
            <div className="edit-field">
              <label>Full Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="[Your name]"
              />
            </div>

            <div className="edit-field">
              <label>Professional Title</label>
              <input 
                type="text" 
                name="title" 
                value={formData.title} 
                onChange={handleChange} 
                placeholder="MERN Stack / React.js Developer"
              />
            </div>

            <div className="edit-field">
              <label>Location</label>
              <input 
                type="text" 
                name="location" 
                value={formData.location} 
                onChange={handleChange} 
                placeholder="City, State / Remote"
              />
            </div>

            <div className="edit-field">
              <label>Email Address</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="your.email@example.com"
              />
            </div>

            <div className="edit-field">
              <label>Phone Number</label>
              <input 
                type="text" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div className="edit-field">
              <label>Availability Badge</label>
              <input 
                type="text" 
                name="badgeText" 
                value={formData.badgeText} 
                onChange={handleChange} 
                placeholder="Available for Full-time Roles"
              />
            </div>

            <div className="edit-field">
              <label>GitHub Profile URL</label>
              <input 
                type="url" 
                name="githubUrl" 
                value={formData.githubUrl} 
                onChange={handleChange} 
                placeholder="https://github.com/yourusername"
              />
            </div>

            <div className="edit-field">
              <label>LinkedIn Profile URL</label>
              <input 
                type="url" 
                name="linkedinUrl" 
                value={formData.linkedinUrl} 
                onChange={handleChange} 
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </div>

            <div className="edit-field full-width">
              <label>Resume Download URL (PDF or Drive link)</label>
              <input 
                type="text" 
                name="resumeUrl" 
                value={formData.resumeUrl} 
                onChange={handleChange} 
                placeholder="https://drive.google.com/... or #resume"
              />
            </div>

            <div className="edit-field full-width">
              <label>Short Introduction / Subheadline</label>
              <textarea 
                name="subheadline" 
                rows="2"
                value={formData.subheadline} 
                onChange={handleChange} 
                placeholder="With hands-on experience in React.js, Node.js..."
              />
            </div>
          </div>

          {/* Footer Actions */}
          <div className="edit-modal-footer">
            <div className="footer-left-actions">
              <button 
                type="button" 
                className="btn btn-secondary btn-sm"
                onClick={onReset}
              >
                <RotateCcw size={15} />
                <span>Reset Defaults</span>
              </button>

              <button 
                type="button" 
                className="btn btn-secondary btn-sm"
                onClick={handleCopyJSON}
              >
                {copied ? <Check size={15} className="copied" /> : <Copy size={15} />}
                <span>{copied ? "JSON Copied!" : "Copy JSON"}</span>
              </button>
            </div>

            <div className="footer-right-actions">
              <button 
                type="button" 
                className="btn btn-secondary btn-sm"
                onClick={onClose}
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="btn btn-primary btn-sm"
              >
                <Save size={15} />
                <span>Apply Live</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
