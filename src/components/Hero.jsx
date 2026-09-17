import React, { useState } from 'react';
import { 
  ArrowRight, Mail, FileDown, 
  Terminal, Check, Copy, Sparkles, Code2, Database, Layers
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import './Hero.css';

export default function Hero({ data }) {
  const [copied, setCopied] = useState(false);
  const { personal } = data;

  const codeSnippet = `const developer = {
  name: "${personal.name}",
  role: "MERN Stack / React.js Specialist",
  stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
  dsaProficiency: "C++ / Problem Solving",
  passion: "Building performant, scalable digital products",
  status: "Available for new opportunities"
};`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          {/* Terminal Greeting Tag */}
          <div className="hero-badge">
            <span className="badge-tag">&lt;span&gt;</span>
            <span className="badge-greeting">{personal.introGreeting || "Hey, I'm"}</span>
            <span className="badge-name">{personal.name}</span>
            <span className="badge-tag">&lt;/span&gt;</span>
          </div>

          {/* Primary Headlines */}
          <h1 className="hero-title">
            Passionate <span className="gradient-green">{personal.title || "MERN Stack / React.js Developer"}</span>
          </h1>

          <p className="hero-description">
            {personal.subheadline || "With hands-on experience in React.js, Next.js, Node.js, Express, and MongoDB, I craft full-stack web applications that are real-world, responsive, and performance-driven."}
          </p>

          {/* Tech Quick Strip */}
          <div className="hero-tech-strip">
            <span className="tech-badge">
              <span className="tech-dot react"></span> React.js
            </span>
            <span className="tech-badge">
              <span className="tech-dot node"></span> Node.js
            </span>
            <span className="tech-badge">
              <span className="tech-dot express"></span> Express.js
            </span>
            <span className="tech-badge">
              <span className="tech-dot mongo"></span> MongoDB
            </span>
            <span className="tech-badge">
              <span className="tech-dot js"></span> JavaScript (ES6+)
            </span>
            <span className="tech-badge">
              <span className="tech-dot tailwind"></span> Tailwind CSS
            </span>
          </div>

          {/* Action CTAs */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>View My Projects</span>
              <ArrowRight size={18} />
            </a>

            <a href="#contact" className="btn btn-secondary">
              <Mail size={18} />
              <span>Contact Me</span>
            </a>

            <a 
              href="#resume" 
              className="btn btn-outline-green"
              title="Resume & Credentials"
            >
              <FileDown size={18} />
              <span>Resume</span>
            </a>
          </div>

          {/* Social Links & Location */}
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
            </div>

            <div className="meta-status">
              <span className="status-ping"></span>
              <span className="status-text">{personal.badgeText || "Open to Full-time Opportunities"}</span>
            </div>
          </div>
        </div>

        {/* Hero Visual: Developer Code Terminal */}
        <div className="hero-visual">
          <div className="terminal-card">
            {/* Terminal Window Header */}
            <div className="terminal-header">
              <div className="terminal-controls">
                <span className="control-dot close"></span>
                <span className="control-dot minimize"></span>
                <span className="control-dot maximize"></span>
              </div>
              <div className="terminal-title">
                <Terminal size={14} />
                <span>developer.config.ts</span>
              </div>
              <button 
                className="btn-copy-code"
                onClick={handleCopyCode}
                title="Copy developer snippet"
                aria-label="Copy code"
              >
                {copied ? <Check size={14} className="copied" /> : <Copy size={14} />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>

            {/* Terminal Code Body */}
            <div className="terminal-body">
              <pre className="code-block">
                <code>
                  <span className="token-keyword">const</span> <span className="token-var">developer</span> = &#123;{'\n'}
                  {'  '}<span className="token-prop">name</span>: <span className="token-string">"{personal.name}"</span>,{'\n'}
                  {'  '}<span className="token-prop">role</span>: <span className="token-string">"{personal.title}"</span>,{'\n'}
                  {'  '}<span className="token-prop">focus</span>: <span className="token-string">"MERN Stack & Scalable Systems"</span>,{'\n'}
                  {'  '}<span className="token-prop">coreStack</span>: [<span className="token-string">"React"</span>, <span className="token-string">"Node"</span>, <span className="token-string">"Express"</span>, <span className="token-string">"MongoDB"</span>],{'\n'}
                  {'  '}<span className="token-prop">location</span>: <span className="token-string">"{personal.location}"</span>,{'\n'}
                  {'  '}<span className="token-prop">openForWork</span>: <span className="token-boolean">true</span>,{'\n'}
                  {'  '}<span className="token-func">buildGreatThings</span>: () =&gt; <span className="token-string">"Ready to ship value"</span>{'\n'}
                  &#125;;
                </code>
              </pre>

              {/* Status pill in editor */}
              <div className="editor-status-pill">
                <span className="pill-dot"></span>
                <span className="pill-text">Status: 200 OK • Ready to collaborate</span>
              </div>
            </div>

            {/* Terminal Footer Mini-Highlights */}
            <div className="terminal-footer">
              <div className="footer-stat">
                <span className="stat-label">Architecture</span>
                <span className="stat-val">Full-Stack MERN</span>
              </div>
              <div className="footer-stat">
                <span className="stat-label">Performance</span>
                <span className="stat-val">Production-Ready</span>
              </div>
              <div className="footer-stat">
                <span className="stat-label">Responsive</span>
                <span className="stat-val">100% Mobile & Desktop</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
