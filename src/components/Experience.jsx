import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, GitCommit } from 'lucide-react';
import './Experience.css';

export default function Experience({ data }) {
  const experiences = data.experience || [];

  if (!experiences || experiences.length === 0) return null;

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Work History</div>
          <h2 className="section-title">
            Professional <span className="gradient-green">Experience</span>
          </h2>
          <p className="section-subtitle">
            Hands-on software development roles building real-world features and reliable web architectures.
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              {/* Timeline marker with glowing dot and connector line */}
              <div className="timeline-marker">
                <div className="marker-dot">
                  <Briefcase size={16} />
                </div>
                {idx !== experiences.length - 1 && <div className="marker-line"></div>}
              </div>

              {/* Experience Card */}
              <div className="experience-card">
                <div className="exp-card-header">
                  <div>
                    <div className="git-commit-tag">
                      <GitCommit size={13} />
                      <span>commit ~ #{idx + 1}</span>
                      <span className="git-branch-label">main</span>
                    </div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <h4 className="exp-company">{exp.company}</h4>
                  </div>

                  <div className="exp-meta-badge">
                    <div className="meta-item">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="meta-item">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {exp.description && (
                  <p className="exp-summary">{exp.description}</p>
                )}

                {/* Accomplishments */}
                {exp.points && exp.points.length > 0 && (
                  <ul className="exp-points-list">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="exp-point-item">
                        <CheckCircle2 size={16} className="point-icon" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech Used */}
                {exp.skills && exp.skills.length > 0 && (
                  <div className="exp-tech-strip">
                    <span className="tech-label">Stack:</span>
                    {exp.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="tech-pill">{skill}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
