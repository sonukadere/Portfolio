import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Mail, FileDown, 
  Terminal, Check, Copy, GitBranch 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import './Hero.css';

const ROLES = [
  "React.js Developer",
  "Frontend Developer",
  "MERN Stack Developer"
];

export default function Hero({ data }) {
  const [copied, setCopied] = useState(false);
  const { personal } = data;

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timer;

    if (!isDeleting && displayedText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayedText === '') {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }, 300);
    } else {
      const typingSpeed = isDeleting ? 40 : 80;
      timer = setTimeout(() => {
        setDisplayedText(
          isDeleting 
            ? currentRole.substring(0, displayedText.length - 1)
            : currentRole.substring(0, displayedText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  const codeLines = [
    { num: 1, content: <>const developer = &#123;</> },
    { num: 2, content: <>  name: <span className="hl-str">"Sonu Kadere"</span>,</> },
    { num: 3, content: <>  role: <span className="hl-str">"React.js Developer"</span>,</> },
    { num: 4, content: <>  location: <span className="hl-str">"Indore, India"</span>,</> },
    { num: 5, content: <>  skills: [</> },
    { num: 6, content: <>    <span className="hl-str">"React.js"</span>,</> },
    { num: 7, content: <>    <span className="hl-str">"JavaScript"</span>,</> },
    { num: 8, content: <>    <span className="hl-str">"Tailwind CSS"</span>,</> },
    { num: 9, content: <>    <span className="hl-str">"Node.js"</span>,</> },
    { num: 10, content: <>    <span className="hl-str">"MongoDB"</span></> },
    { num: 11, content: <>  ],</> },
    { num: 12, content: <>  available: <span className="hl-bool">true</span></> },
    { num: 13, content: <>&#125;;</> }
  ];

  const rawCode = `const developer = {
  name: "Sonu Kadere",
  role: "React.js Developer",
  location: "Indore, India",
  skills: [
    "React.js",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "MongoDB"
  ],
  available: true
};`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(rawCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          {/* Terminal Command Whoami Strip */}
          <div className="terminal-whoami-box">
            <div className="whoami-prompt-row">
              <span className="whoami-symbol">$</span>
              <span className="whoami-cmd">whoami</span>
            </div>
            <div className="whoami-output">
              <span className="whoami-name">Sonu Kadere</span>
              <span className="whoami-dot">•</span>
              <span>React.js Developer</span>
              <span className="whoami-dot">•</span>
              <span>Frontend Developer</span>
              <span className="whoami-dot">•</span>
              <span>MERN Stack Developer</span>
            </div>
          </div>

          {/* Main Headings */}
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-green">{personal.name || "Sonu Kadere"}</span>
          </h1>

          <div className="hero-role-badge">
            <span className="role-tag-bracket">&lt; </span>
            <span className="role-primary-text">{displayedText}</span>
            <span className="typewriter-cursor">|</span>
            <span className="role-tag-bracket"> /&gt;</span>
          </div>

          <p className="hero-description">
            I build modern, responsive, and scalable web applications using React.js, JavaScript, Tailwind CSS, Node.js, Express.js, and MongoDB.
          </p>

          {/* Action CTAs */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary btn-hero">
              <Terminal size={17} />
              <span>View Projects</span>
              <ArrowRight size={16} />
            </a>

            <a 
              href={personal.resumeUrl || "#resume"} 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-green btn-hero"
              title="Download Resume"
            >
              <FileDown size={17} />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-meta">
            <div className="meta-socials">
              {personal.githubUrl && (
                <a 
                  href={personal.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="meta-social-link"
                  aria-label="GitHub"
                >
                  <GithubIcon size={18} />
                  <span>GitHub</span>
                </a>
              )}

              {personal.linkedinUrl && (
                <a 
                  href={personal.linkedinUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="meta-social-link"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={18} />
                  <span>LinkedIn</span>
                </a>
              )}

              <a 
                href={`mailto:${personal.email}`}
                className="meta-social-link"
                aria-label="Email"
              >
                <Mail size={18} />
                <span>Email</span>
              </a>
            </div>

            <div className="meta-status">
              <span className="status-ping"></span>
              <span className="status-text">{personal.badgeText || "Available for software engineering roles"}</span>
            </div>
          </div>
        </div>

        {/* Hero Visual: VS Code Style Editor Card */}
        <div className="hero-visual">
          <div className="vscode-editor-card">
            {/* VS Code Tab Bar */}
            <div className="vscode-header">
              <div className="vscode-controls">
                <span className="vs-dot close"></span>
                <span className="vs-dot minimize"></span>
                <span className="vs-dot maximize"></span>
              </div>

              <div className="vscode-tabs">
                <div className="vscode-tab active">
                  <span className="tab-icon-js">JS</span>
                  <span className="tab-filename">developer.config.js</span>
                  <span className="tab-close-icon">×</span>
                </div>
              </div>

              <button 
                className="btn-copy-code"
                onClick={handleCopyCode}
                title="Copy developer snippet"
                aria-label="Copy code"
              >
                {copied ? <Check size={13} className="copied" /> : <Copy size={13} />}
                <span>{copied ? "Copied!" : "Copy"}</span>
              </button>
            </div>

            {/* Code Body with Line Numbers Gutter */}
            <div className="vscode-editor-body">
              <div className="code-editor-layout">
                <div className="editor-gutter" aria-hidden="true">
                  {codeLines.map(line => (
                    <span key={line.num} className="gutter-num">{line.num}</span>
                  ))}
                </div>

                <div className="editor-content">
                  <pre className="vscode-code-pre">
                    <code>
                      {codeLines.map(line => (
                        <div key={line.num} className="code-line">
                          {line.content}
                        </div>
                      ))}
                    </code>
                  </pre>
                </div>
              </div>
            </div>

            {/* VS Code Bottom Status Bar */}
            <div className="vscode-status-bar">
              <div className="status-item git-branch">
                <GitBranch size={13} />
                <span>main*</span>
              </div>

              <div className="status-item right-meta">
                <span className="status-sub-item">UTF-8</span>
                <span className="status-sub-item">JavaScript</span>
                <span className="status-sub-item highlight">Prettier: ✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
