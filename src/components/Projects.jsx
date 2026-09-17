import React, { useState } from 'react';
import { ExternalLink, CheckCircle2, FolderGit2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import './Projects.css';

export default function Projects({ data }) {
  const [filter, setFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);
  const projects = data.projects || [];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const handleLinkClick = (e, url, title, type) => {
    // If it's a dummy or placeholder URL, show a notification/modal modal
    if (!url || url.includes('example.com') || url.startsWith('#')) {
      e.preventDefault();
      setActiveModalProject({
        title,
        type,
        url: url || '[Add your link]'
      });
    }
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Featured Work</div>
          <h2 className="section-title">
            Engineered For <span className="gradient-green">Scale & Impact</span>
          </h2>
          <p className="section-subtitle">
            A curated showcase of full-stack MERN applications, real-time ecosystems, and responsive interfaces.
          </p>
        </div>

        {/* Project Filters */}
        <div className="projects-filter-bar">
          {['All', 'Full Stack', 'Frontend'].map((cat) => (
            <button
              key={cat}
              type="button"
              className={`project-filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <article key={project.id || index} className="project-card">
              {/* Media Preview Box */}
              <div className="project-media-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                  loading="lazy" 
                />
                <div className="project-overlay-badge">
                  <span className="live-status-dot"></span>
                  <span>{project.category}</span>
                </div>
              </div>

              {/* Details Content */}
              <div className="project-content">
                {/* Developer Repo Meta Header */}
                <div className="repo-meta-bar">
                  <div className="repo-name-box">
                    <FolderGit2 size={15} className="repo-icon" />
                    <span className="repo-owner">sonukadere /</span>
                    <span className="repo-title">{project.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}</span>
                  </div>
                  <span className="repo-badge-public">Public</span>
                </div>

                <div className="project-header">
                  <span className="project-tagline">{project.tagline}</span>
                  <h3 className="project-name">{project.title}</h3>
                </div>

                <p className="project-desc">{project.description}</p>

                {/* Structured Specs Table (as seen in reference site) */}
                {project.stats && (
                  <div className="project-specs-table">
                    {project.stats.platform && (
                      <div className="spec-row">
                        <span className="spec-label">Platform</span>
                        <span className="spec-val">{project.stats.platform}</span>
                      </div>
                    )}
                    {project.stats.features && (
                      <div className="spec-row">
                        <span className="spec-label">Features</span>
                        <span className="spec-val">{project.stats.features}</span>
                      </div>
                    )}
                    {project.stats.security && (
                      <div className="spec-row">
                        <span className="spec-label">Security</span>
                        <span className="spec-val">{project.stats.security}</span>
                      </div>
                    )}
                    {project.stats.techStack && (
                      <div className="spec-row">
                        <span className="spec-label">Tech Stack</span>
                        <span className="spec-val">{project.stats.techStack}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Technical Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="project-highlights">
                    <span className="highlights-header">Technical Highlights:</span>
                    <ul className="project-bullets">
                      {project.highlights.map((point, pIdx) => (
                        <li key={pIdx} className="bullet-point">
                          <CheckCircle2 size={15} className="bullet-icon" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Badges Strip */}
                <div className="project-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="tech-pill">{tag}</span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="project-actions">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                    onClick={(e) => handleLinkClick(e, project.liveUrl, project.title, 'Live Demo')}
                  >
                    <ExternalLink size={15} />
                    <span>Live Demo</span>
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    onClick={(e) => handleLinkClick(e, project.githubUrl, project.title, 'GitHub Repo')}
                  >
                    <GithubIcon size={15} />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Demo Notification Modal for Placeholders */}
      {activeModalProject && (
        <div className="modal-backdrop" onClick={() => setActiveModalProject(null)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <span className="modal-tag">Project Link Info</span>
              <button 
                type="button" 
                className="modal-close-btn"
                onClick={() => setActiveModalProject(null)}
              >
                ✕
              </button>
            </div>
            <h4 className="modal-project-title">{activeModalProject.title}</h4>
            <p className="modal-message">
              You clicked <strong>{activeModalProject.type}</strong>. To link your real production URL or GitHub repository, edit <code>src/data/portfolioData.js</code> or use the <strong>Customize Info</strong> button on top!
            </p>
            <div className="modal-link-box">
              <code>{activeModalProject.url}</code>
            </div>
            <div className="modal-actions">
              <button 
                type="button" 
                className="btn btn-primary btn-sm"
                onClick={() => setActiveModalProject(null)}
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
