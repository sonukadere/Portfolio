import React, { useState } from 'react';
import { 
  Code2, Server, Database, Wrench, Sparkles, 
  Layers, Terminal, Layout, FileCode, Cpu, ShieldCheck, 
  Radio, Boxes, Table, GitBranch, Send
} from 'lucide-react';
import './Skills.css';

export default function Skills({ data }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const { skills } = data;

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend', icon: Layout },
    { id: 'backend', label: 'Backend', icon: Server },
    { id: 'database', label: 'Database', icon: Database },
    { id: 'tools', label: 'Tools & DevOps', icon: Wrench },
  ];

  const getTechIcon = (iconName) => {
    switch (iconName) {
      case 'Code2': return <Code2 size={20} />;
      case 'FileCode': return <FileCode size={20} />;
      case 'Layout': return <Layout size={20} />;
      case 'Palette': return <Layers size={20} />;
      case 'Layers': return <Layers size={20} />;
      case 'Cpu': return <Cpu size={20} />;
      case 'Server': return <Server size={20} />;
      case 'Network': return <Cpu size={20} />;
      case 'ArrowLeftRight': return <Code2 size={20} />;
      case 'ShieldCheck': return <ShieldCheck size={20} />;
      case 'Radio': return <Radio size={20} />;
      case 'Database': return <Database size={20} />;
      case 'Boxes': return <Boxes size={20} />;
      case 'Table': return <Table size={20} />;
      case 'GitBranch': return <GitBranch size={20} />;
      case 'Terminal': return <Terminal size={20} />;
      case 'Send': return <Send size={20} />;
      default: return <Sparkles size={20} />;
    }
  };

  const renderCategoryCard = (catKey, title, icon, accentClass, items) => {
    if (!items || items.length === 0) return null;
    if (activeCategory !== 'all' && activeCategory !== catKey) return null;

    const IconComp = icon;

    return (
      <div className={`skill-category-card ${accentClass}`}>
        <div className="category-header">
          <div className="category-icon-box">
            <IconComp size={22} />
          </div>
          <div className="category-title-wrap">
            <h3 className="category-name">{title}</h3>
            <span className="category-count">{items.length} Technologies</span>
          </div>
        </div>

        <div className="skills-tags-grid">
          {items.map((skill, index) => (
            <div 
              key={index} 
              className={`skill-item-card ${skill.highlight ? 'highlight' : ''}`}
            >
              <div className="skill-item-icon">
                {getTechIcon(skill.icon)}
              </div>
              <div className="skill-item-details">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}</span>
              </div>
              {skill.highlight && (
                <span className="core-star" title="Core Specialization">★</span>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Skills & Expertise</div>
          <h2 className="section-title">
            Modern <span className="gradient-green">Full-Stack Tech Stack</span>
          </h2>
          <p className="section-subtitle">
            Curated tools and technologies I use to architect robust, scalable, and high-performance applications.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="skills-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`filter-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-cards-grid">
          {renderCategoryCard(
            'frontend', 
            'Frontend Development', 
            Layout, 
            'cat-frontend', 
            skills.frontend
          )}
          {renderCategoryCard(
            'backend', 
            'Backend & APIs', 
            Server, 
            'cat-backend', 
            skills.backend
          )}
          {renderCategoryCard(
            'database', 
            'Databases & Storage', 
            Database, 
            'cat-database', 
            skills.database
          )}
          {renderCategoryCard(
            'tools', 
            'Tools & Workflow', 
            Wrench, 
            'cat-tools', 
            skills.tools
          )}
        </div>
      </div>
    </section>
  );
}
