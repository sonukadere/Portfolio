import React from 'react';
import { Calendar, Building2, MapPin, BookOpen, CheckCircle2 } from 'lucide-react';
import './Education.css';

export default function Education({ data }) {
  const educations = data.education || [];

  if (!educations || educations.length === 0) return null;

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Academic Background</div>
          <h2 className="section-title">
            Education & <span className="gradient-green">Qualifications</span>
          </h2>
          <p className="section-subtitle">
            Formal foundations in computer science, software engineering, and computational theory.
          </p>
        </div>

        <div className="education-grid">
          {educations.map((item, idx) => {
            const isCompleted = item.score?.toLowerCase().includes('completed') || item.score?.toLowerCase().includes('graduated');
            const fileLabel = idx === 0 ? 'mca_degree.json' : 'bca_degree.json';

            return (
              <div key={idx} className="education-card">
                {/* Developer Window Header Bar */}
                <div className="edu-window-bar">
                  <div className="edu-window-controls">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                    <span className="edu-file-tab">{fileLabel}</span>
                  </div>
                  <span className="edu-branch-tag">DAVV::SCS&IT</span>
                </div>

                <div className="edu-card-body">
                  {/* Metadata Row: Period & Status */}
                  <div className="edu-meta-row">
                    <div className="edu-time-badge">
                      <Calendar size={13} />
                      <span>{item.year}</span>
                    </div>

                    {item.score && (
                      <span className={`edu-status-pill ${isCompleted ? 'status-completed' : ''}`}>
                        <CheckCircle2 size={12} />
                        <span>{item.score}</span>
                      </span>
                    )}
                  </div>

                  {/* Degree and Institution */}
                  <h3 className="edu-degree-title">{item.degree}</h3>

                  <div className="edu-institute-info">
                    <div className="edu-info-line">
                      <Building2 size={15} className="edu-icon" />
                      <span className="edu-inst-name">{item.institute}</span>
                    </div>
                    <div className="edu-info-line edu-univ-highlight">
                      <MapPin size={14} className="edu-icon location-icon" />
                      <span className="edu-univ-name">{item.university}</span>
                    </div>
                  </div>

                  {/* Academic Summary */}
                  {item.details && (
                    <p className="edu-summary-text">{item.details}</p>
                  )}

                  {/* Coursework Stack Chips */}
                  {item.coursework && item.coursework.length > 0 && (
                    <div className="edu-coursework-section">
                      <div className="coursework-label-row">
                        <BookOpen size={13} />
                        <span>Core Coursework & Concepts</span>
                      </div>
                      <div className="edu-chips-wrap">
                        {item.coursework.map((chip, cIdx) => (
                          <span key={cIdx} className="edu-course-chip">
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

