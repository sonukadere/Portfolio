import React from 'react';
import { User, CheckCircle2, Target, MapPin } from 'lucide-react';
import './About.css';

export default function About({ data }) {
  const { personal, about } = data;

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">About Me</div>
          <h2 className="section-title">
            Passionate About Crafting <span className="gradient-green">Scalable Web Solutions</span>
          </h2>
          <p className="section-subtitle">
            A developer who bridges user-centric design with clean, high-performance architecture.
          </p>
        </div>

        <div className="about-grid">
          {/* Profile Card / Avatar Column */}
          <div className="about-profile-card">
            <div className="profile-image-container">
              {personal.avatar ? (
                <img 
                  src={personal.avatar} 
                  alt={personal.name} 
                  className="profile-avatar-img"
                  width="170"
                  height="170"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <div className="profile-avatar-fallback">
                  <User size={64} className="avatar-icon" />
                </div>
              )}
              <div className="profile-glow-ring"></div>
            </div>

            <div className="profile-meta">
              <h3 className="profile-name">{personal.name}</h3>
              <p className="profile-role">{personal.title}</p>
              
              <div className="profile-location">
                <MapPin size={15} />
                <span>{personal.location}</span>
              </div>

              <div className="profile-badge-row">
                <span className="mini-badge">MERN Stack</span>
                <span className="mini-badge">Full-Stack</span>
                <span className="mini-badge">DSA Enthusiast</span>
              </div>
            </div>

            {/* Quick Stat Pill */}
            <div className="profile-status-box">
              <span className="status-indicator"></span>
              <span className="status-label">Ready for new challenges</span>
            </div>
          </div>

          {/* Details & Story Column */}
          <div className="about-content">
            <div className="terminal-prompt-bar">
              <span className="prompt-symbol">$</span>
              <span className="prompt-cmd">{about.terminalCommand || "cat about_developer.md"}</span>
            </div>

            <h3 className="about-greeting">{about.greeting}</h3>

            <div className="about-paragraphs">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="about-p">{p}</p>
              ))}
            </div>

            {/* Core Highlights */}
            <div className="about-highlights">
              <h4 className="highlights-title">Core Development Strengths</h4>
              <ul className="highlights-list">
                {about.highlights.map((item, i) => (
                  <li key={i} className="highlight-item">
                    <CheckCircle2 size={18} className="check-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Career Goal Box */}
            <div className="career-goal-card">
              <div className="goal-icon-box">
                <Target size={22} />
              </div>
              <div className="goal-content">
                <h4 className="goal-title">My Career Goal</h4>
                <p className="goal-text">{about.careerGoal}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
