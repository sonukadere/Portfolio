import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import './Footer.css';

export default function Footer({ data }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="portfolio-footer">
      <div className="container footer-container">
        {/* Top bar with back to top and status */}
        <div className="footer-top-row">
          <div className="footer-brand">
            <span className="brand-prompt">[~]$</span>
            <span className="brand-name">{data.personal.name}</span>
            <span className="footer-role">/ {data.personal.title}</span>
          </div>

          <button 
            type="button" 
            className="back-to-top-btn"
            onClick={scrollToTop}
            title="Scroll to Top"
            aria-label="Back to Top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>

        {/* Middle Navigation Jump Links */}
        <div className="footer-nav-row">
          <ul className="footer-links-list">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#terminal">Terminal</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div className="footer-social-icons">
            {data.personal.githubUrl && (
              <a 
                href={data.personal.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
              </a>
            )}
            {data.personal.linkedinUrl && (
              <a 
                href={data.personal.linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Bottom copyright & system status */}
        <div className="footer-bottom-row">
          <p className="copyright-text">
            © {currentYear} {data.personal.name}. Built with React.js & clean Vanilla CSS.
          </p>

          <div className="footer-status-pill">
            <span className="status-indicator-dot"></span>
            <span>All systems operational • Available for hire</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
