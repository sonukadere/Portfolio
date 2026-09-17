import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Trash2 } from 'lucide-react';
import './InteractiveTerminal.css';

export default function InteractiveTerminal({ data }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'output',
      text: `Welcome to the Developer Interactive Console 👋\nType 'help' to see all available commands, or click on a quick-command chip below.`
    }
  ]);

  const screenRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    if (screenRef.current) {
      screenRef.current.scrollTo({
        top: screenRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const quickCommands = [
    'help',
    'skills',
    'projects',
    'experience',
    'education',
    'contact',
    'resume',
    'clear'
  ];

  const handleCommand = (cmdText) => {
    const cleanCmd = cmdText.trim().toLowerCase();
    if (!cleanCmd) return;

    if (cleanCmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    let response = '';

    switch (cleanCmd) {
      case 'help':
        response = `Available Commands:
  • about       - Learn more about my background and goals
  • skills      - Overview of technical skills & tools
  • projects    - Summary of featured MERN projects
  • experience  - Professional work experience & milestones
  • education   - Academic degrees & credentials
  • contact     - Direct email, socials, and contact details
  • resume      - Download or view my resume
  • clear       - Wipe terminal screen`;
        break;

      case 'about':
      case 'whoareyou':
        response = `${data.personal.name} | ${data.personal.title}\n${data.about.greeting}\n\nKey focus: ${data.about.highlights.join(' • ')}`;
        break;

      case 'skills':
        const fe = data.skills.frontend.map(s => s.name).join(', ');
        const be = data.skills.backend.map(s => s.name).join(', ');
        const db = data.skills.database.map(s => s.name).join(', ');
        const tl = data.skills.tools.map(s => s.name).join(', ');
        response = `Technical Stack Overview:\n[Frontend]: ${fe}\n[Backend]:  ${be}\n[Database]: ${db}\n[Tools]:    ${tl}`;
        break;

      case 'projects':
        response = data.projects.map((p, i) => `${i + 1}. ${p.title} (${p.category})\n   Stack: ${p.tags.join(', ')}\n   Demo: ${p.liveUrl}`).join('\n\n');
        break;

      case 'experience':
        response = data.experience.map(e => `● ${e.role} @ ${e.company} (${e.period})\n  Location: ${e.location}\n  Highlights: ${e.points[0]}`).join('\n\n');
        break;

      case 'education':
        response = data.education.map(ed => `🎓 ${ed.degree}\n   ${ed.institute} (${ed.year}) | ${ed.score}`).join('\n\n');
        break;

      case 'contact':
        response = `Get in Touch:\n• Email:    ${data.personal.email}\n• Location: ${data.personal.location}\n• GitHub:   ${data.personal.githubUrl}\n• LinkedIn: ${data.personal.linkedinUrl}`;
        break;

      case 'resume':
        response = `📄 Resume URL: ${data.personal.resumeUrl}\nClick on the 'Download Resume' button above or scroll to the Resume section to get the latest PDF.`;
        break;

      default:
        response = `Command not recognized: '${cleanCmd}'. Type 'help' to see valid commands.`;
    }

    setHistory(prev => [
      ...prev,
      { type: 'input', text: cleanCmd },
      { type: 'output', text: response }
    ]);
    setInput('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(input);
  };

  return (
    <section id="terminal" className="section terminal-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Interactive Console</div>
          <h2 className="section-title">
            Ask The <span className="gradient-green">Developer Terminal</span>
          </h2>
          <p className="section-subtitle">
            An interactive command line interface to explore qualifications, tech stack, and experience.
          </p>
        </div>

        <div className="terminal-wrapper">
          {/* Top Bar */}
          <div className="terminal-nav-bar">
            <div className="nav-bar-controls">
              <span className="terminal-dot red"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>
            </div>

            <div className="nav-bar-label">
              <TerminalIcon size={15} />
              <span>bash - dev-cli@portfolio: ~</span>
            </div>

            <button 
              type="button" 
              className="terminal-clear-btn" 
              onClick={() => setHistory([])}
              title="Clear Terminal"
            >
              <Trash2 size={14} />
              <span>Clear</span>
            </button>
          </div>

          {/* Quick Command Chips */}
          <div className="quick-commands-bar">
            <span className="quick-label">Quick Run:</span>
            {quickCommands.map((cmd) => (
              <button
                key={cmd}
                type="button"
                className="cmd-chip"
                onClick={() => handleCommand(cmd)}
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* Terminal Screen Body */}
          <div 
            ref={screenRef}
            className="terminal-screen" 
            onClick={() => inputRef.current?.focus({ preventScroll: true })}
          >
            {history.map((entry, idx) => (
              <div key={idx} className={`log-entry ${entry.type}`}>
                {entry.type === 'input' ? (
                  <div className="log-input-line">
                    <span className="term-user">visitor@portfolio</span>
                    <span className="term-sep">:</span>
                    <span className="term-dir">~</span>
                    <span className="term-symbol">$</span>
                    <span className="term-cmd-text">{entry.text}</span>
                  </div>
                ) : (
                  <pre className="log-output-pre">{entry.text}</pre>
                )}
              </div>
            ))}

            {/* Current Active Input Line */}
            <form onSubmit={handleSubmit} className="terminal-input-form">
              <span className="term-user">visitor@portfolio</span>
              <span className="term-sep">:</span>
              <span className="term-dir">~</span>
              <span className="term-symbol">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="type a command (e.g. skills, projects, contact)..."
                className="terminal-real-input"
                autoComplete="off"
                spellCheck="false"
              />
              <button type="submit" className="terminal-submit-arrow" aria-label="Execute Command">
                <CornerDownLeft size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
