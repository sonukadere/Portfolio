import React, { useState } from 'react';
import { FileDown, Eye, CheckCircle, ExternalLink, Sparkles } from 'lucide-react';
import './ResumeCTA.css';

export default function ResumeCTA({ data }) {
  const [modalOpen, setModalOpen] = useState(false);
  const { personal } = data;

  const handleResumeClick = (e, action) => {
    if (!personal.resumeUrl || personal.resumeUrl.startsWith('#') || personal.resumeUrl.includes('example.com')) {
      e.preventDefault();
      setModalOpen(true);
    }
  };

  return (
    <section id="resume" className="section resume-section">
      <div className="container">
        <div className="resume-card-box">
          <div className="resume-glow-effect"></div>

          <div className="resume-content-wrap">
            <span className="resume-badge">Recruiter Quick Access</span>
            <h2 className="resume-heading">
              Ready to Review My Full <span className="gradient-green">Curriculum Vitae?</span>
            </h2>
            <p className="resume-subheading">
              Get an in-depth breakdown of my technical projects, software engineering accomplishments, and educational background.
            </p>

            <div className="resume-cta-buttons">
              <a 
                href={personal.resumeUrl}
                download="Developer_Resume.pdf"
                className="btn btn-primary"
                onClick={(e) => handleResumeClick(e, 'Download')}
              >
                <FileDown size={18} />
                <span>Download Resume (PDF)</span>
              </a>

              <a 
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                onClick={(e) => handleResumeClick(e, 'View')}
              >
                <Eye size={18} />
                <span>View Resume</span>
              </a>
            </div>

            <div className="resume-trust-notes">
              <span className="trust-item">
                <CheckCircle size={14} className="trust-icon" />
                Updated for 2026
              </span>
              <span className="trust-item">
                <CheckCircle size={14} className="trust-icon" />
                ATS-Optimized Formatting
              </span>
              <span className="trust-item">
                <CheckCircle size={14} className="trust-icon" />
                MERN Stack & React.js Focus
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Link Notice Modal */}
      {modalOpen && (
        <div className="resume-modal-backdrop" onClick={() => setModalOpen(false)}>
          <div className="resume-modal-box" onClick={(e) => e.stopPropagation()}>
            <h3 className="modal-title">Resume Link Configuration</h3>
            <p className="modal-desc">
              Your resume link is currently configured as a placeholder. To link your Google Drive, Dropbox, or local PDF file, update <code>personal.resumeUrl</code> in <code>src/data/portfolioData.js</code> or use the <strong>Customize Info</strong> button!
            </p>
            <div className="modal-code-box">
              <code>personal.resumeUrl: "{personal.resumeUrl}"</code>
            </div>
            <button 
              type="button" 
              className="btn btn-primary btn-sm"
              onClick={() => setModalOpen(false)}
            >
              Understand
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
