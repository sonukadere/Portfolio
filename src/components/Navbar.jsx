import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import './Navbar.css';

export default function Navbar({ data, onOpenEdit }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'terminal', 'experience', 'education', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Terminal', href: '#terminal', id: 'terminal' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const displayName = data.personal.name || 'Developer';

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Terminal Logo */}
        <a href="#hero" className="navbar-brand">
          <span className="brand-prompt">[~]$</span>
          <span className="brand-name">{displayName}</span>
          <span className="brand-cursor">_</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-nav desktop-only" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.id} className="nav-item">
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className="navbar-actions desktop-only">
          {data.personal.githubUrl && (
            <a 
              href={data.personal.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-btn"
              title="GitHub Profile"
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
              className="social-icon-btn linkedin"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>
          )}

          <a 
            href="#resume" 
            className="btn btn-outline-green btn-sm"
          >
            <FileDown size={15} />
            <span>Resume</span>
          </a>

          <button 
            type="button" 
            onClick={onOpenEdit}
            className="btn-edit-pill"
            title="Customize Portfolio Details"
          >
            <Sparkles size={14} />
            <span>Customize Info</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="mobile-actions mobile-only">
          <button 
            type="button"
            onClick={onOpenEdit}
            className="btn-edit-pill-mobile"
            title="Customize Details"
          >
            <Sparkles size={14} />
          </button>

          <button
            type="button"
            className="hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-inner">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-drawer-footer">
            <div className="mobile-socials">
              {data.personal.githubUrl && (
                <a 
                  href={data.personal.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary btn-sm"
                >
                  <GithubIcon size={16} /> GitHub
                </a>
              )}
              {data.personal.linkedinUrl && (
                <a 
                  href={data.personal.linkedinUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary btn-sm"
                >
                  <LinkedinIcon size={16} /> LinkedIn
                </a>
              )}
            </div>

            <a 
              href="#resume" 
              className="btn btn-primary btn-sm mobile-resume-btn"
              onClick={handleLinkClick}
            >
              <FileDown size={16} /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
