import React from 'react';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';
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
            Formal foundations in computer science, software engineering, algorithms, and computational theory.
          </p>
        </div>

        <div className="education-grid">
          {educations.map((item, idx) => (
            <div key={idx} className="education-card">
              <div className="edu-icon-badge">
                <GraduationCap size={24} />
              </div>

              <div className="edu-content">
                <div className="edu-top-row">
                  <span className="edu-year">
                    <Calendar size={13} />
                    {item.year}
                  </span>
                  {item.score && (
                    <span className="edu-score-pill">{item.score}</span>
                  )}
                </div>

                <h3 className="edu-degree">{item.degree}</h3>
                <h4 className="edu-institute">{item.institute}</h4>
                <p className="edu-univ">{item.university}</p>

                {item.details && (
                  <p className="edu-details">{item.details}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
