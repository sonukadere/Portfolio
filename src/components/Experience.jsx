import React from 'react';
import { Calendar, MapPin, CheckCircle2, GitCommit, Sparkles } from 'lucide-react';
import './Experience.css';

export default function Experience({ data }) {
  const experiences = data.experience || [];

  if (!experiences || experiences.length === 0) return null;

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Career Milestones</div>
          <h2 className="section-title">
            Professional <span className="gradient-green">Experience</span>
          </h2>
          <p className="section-subtitle">
            Hands-on software development roles delivering production features, reusable components, and performant web apps.
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, idx) => {
            const isCurrent = exp.period.toLowerCase().includes('present');
            return (
              <div key={idx} className={`timeline-item ${isCurrent ? 'current-item' : ''}`}>
                {/* Timeline node with branch line */}
                <div className="timeline-marker">
                  <div className={`marker-node ${isCurrent ? 'node-active' : ''}`}>
                    <GitCommit size={16} />
                  </div>
                  {idx !== experiences.length - 1 && <div className="marker-branch-line"></div>}
                </div>

                {/* Experience Card */}
                <div className="experience-card">
                  {/* Top Bar: Commit & Period */}
                  <div className="exp-top-bar">
                    <div className="exp-git-chip">
                      <span className="git-chip-prefix">git:</span>
                      <span className="git-chip-hash">
                        commit-0{experiences.length - idx}a{idx + 1}
                      </span>
                      <span className="git-chip-branch">main</span>
                    </div>

                    <div className="exp-time-badge">
                      <Calendar size={13} />
                      <span>{exp.period}</span>
                      {isCurrent && (
                        <span className="status-badge-active">
                          <span className="status-dot-pulse"></span>
                          Active Role
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Role and Company Info */}
                  <div className="exp-header-info">
                    <div>
                      <h3 className="exp-role-title">{exp.role}</h3>
                      <div className="exp-company-row">
                        <span className="exp-company-name">{exp.company}</span>
                        <span className="exp-location-tag">
                          <MapPin size={13} />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Summary / Description */}
                  {exp.description && (
                    <p className="exp-overview">{exp.description}</p>
                  )}

                  {/* Key Accomplishments */}
                  {exp.points && exp.points.length > 0 && (
                    <div className="exp-accomplishments">
                      <span className="accomplishments-title">
                        <Sparkles size={13} className="sparkle-icon" />
                        Key Engineering Contributions:
                      </span>
                      <ul className="exp-points-list">
                        {exp.points.map((pt, pIdx) => (
                          <li key={pIdx} className="exp-point-item">
                            <CheckCircle2 size={15} className="point-icon" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack Chips */}
                  {exp.skills && exp.skills.length > 0 && (
                    <div className="exp-tech-strip">
                      <span className="tech-label">Environment:</span>
                      <div className="tech-pills-wrap">
                        {exp.skills.map((skill, sIdx) => (
                          <span key={sIdx} className="exp-tech-pill">{skill}</span>
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
