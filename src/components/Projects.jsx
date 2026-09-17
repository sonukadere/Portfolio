import React, { useState } from 'react';
import { ExternalLink, CheckCircle2, FolderGit2, X } from 'lucide-react';
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
            A curated showcase of production-ready full-stack MERN applications, client web platforms, and responsive interfaces.
          </p>
        </div>

        {/* Project Category Filters */}
        <div className="projects-filter-bar">
          {['All', 'Full Stack', 'Frontend'].map((cat) => {
            const count = cat === 'All' 
              ? projects.length 
              : projects.filter(p => p.category === cat).length;
            return (
              <button
                key={cat}
                type="button"
                className={`project-filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                <span>{cat}</span>
                <span className="filter-count">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Responsive Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <article key={project.id || index} className="project-card">
              {/* Browser Window Header Mockup */}
              <div className="project-window-header">
                <div className="window-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="window-address-bar">
                  <span className="address-protocol">https://</span>
                  <span className="address-domain">
                    {project.liveUrl ? project.liveUrl.replace(/^https?:\/\//, '').replace(/\/.*$/, '') : 'github.com'}
                  </span>
                </div>
                <span className="project-category-pill">{project.category}</span>
              </div>

              {/* Media Preview Box */}
              <div className="project-media-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                  loading="lazy" 
                />
                <div className="project-image-gradient"></div>
              </div>

              {/* Details Content */}
              <div className="project-content">
                {/* Developer Repo Meta Header */}
                <div className="repo-meta-bar">
                  <div className="repo-name-box">
                    <FolderGit2 size={14} className="repo-icon" />
                    <span className="repo-owner">sonukadere /</span>
                    <span className="repo-title">
                      {project.title.toLowerCase().replace(/[^a-z0-9]/g, '-').slice(0, 22)}
                    </span>
                  </div>
                  <span className="repo-badge-public">Public</span>
                </div>

                <div className="project-header">
                  <span className="project-tagline">{project.tagline}</span>
                  <h3 className="project-name">{project.title}</h3>
                </div>

                <p className="project-desc">{project.description}</p>

                {/* Key Technical Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="project-highlights">
                    <ul className="project-bullets">
                      {project.highlights.slice(0, 2).map((point, pIdx) => (
                        <li key={pIdx} className="bullet-point">
                          <CheckCircle2 size={14} className="bullet-icon" />
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

                {/* Action Buttons */}
                <div className="project-actions">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm project-btn"
                    onClick={(e) => handleLinkClick(e, project.liveUrl, project.title, 'Live Demo')}
                  >
                    <ExternalLink size={14} />
                    <span>Live Demo</span>
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm project-btn"
                    onClick={(e) => handleLinkClick(e, project.githubUrl, project.title, 'GitHub Repo')}
                  >
                    <GithubIcon size={14} />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Demo Notification Modal */}
      {activeModalProject && (
        <div className="modal-backdrop" onClick={() => setActiveModalProject(null)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <span className="modal-tag">Project Link Info</span>
              <button 
                type="button" 
                className="modal-close-btn"
                onClick={() => setActiveModalProject(null)}
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>
            
            <div className="modal-body">
              <h4 className="modal-title">{activeModalProject.title}</h4>
              <p className="modal-text">
                The {activeModalProject.type} link is currently being finalized or hosted in a private staging environment.
              </p>
              <div className="modal-url-box">
                <code>{activeModalProject.url}</code>
              </div>
            </div>

            <div className="modal-footer">
              <button 
                type="button" 
                className="btn btn-primary btn-sm"
                onClick={() => setActiveModalProject(null)}
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
