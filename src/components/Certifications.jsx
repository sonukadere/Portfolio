import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';
import './Certifications.css';

export default function Certifications({ data }) {
  const certs = data.certifications || [];

  if (!certs || certs.length === 0) return null;

  return (
    <section id="certifications" className="section certifications-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Credentials</div>
          <h2 className="section-title">
            Certifications & <span className="gradient-green">Recognitions</span>
          </h2>
          <p className="section-subtitle">
            Validated industry certifications and problem solving credentials.
          </p>
        </div>

        <div className="certifications-grid">
          {certs.map((cert, idx) => (
            <div key={idx} className="cert-card">
              <div className="cert-badge-icon">
                <Award size={22} />
              </div>

              <div className="cert-body">
                <div className="cert-date">
                  <Calendar size={13} />
                  <span>{cert.date}</span>
                </div>

                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>

                {cert.credentialUrl && (
                  <a 
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-link"
                  >
                    <span>View Credential</span>
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
