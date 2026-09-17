import React from 'react';
import { Code, FolderGit2, Wrench, Bug, Zap } from 'lucide-react';
import './Metrics.css';

export default function Metrics({ data }) {
  const metrics = data.metrics || [];

  const getIcon = (iconName, index) => {
    switch (iconName) {
      case 'Code':
        return <Code className="metric-icon code" size={24} />;
      case 'FolderGit2':
        return <FolderGit2 className="metric-icon folder" size={24} />;
      case 'Wrench':
        return <Wrench className="metric-icon wrench" size={24} />;
      case 'Zap':
      default:
        return index === 3 ? <Bug className="metric-icon bug" size={24} /> : <Zap className="metric-icon zap" size={24} />;
    }
  };

  return (
    <section className="metrics-section">
      <div className="container">
        <div className="metrics-grid">
          {metrics.map((metric, idx) => (
            <div key={idx} className="metric-card">
              <div className="metric-icon-wrapper">
                {getIcon(metric.icon, idx)}
              </div>
              <div className="metric-info">
                <span className="metric-value">{metric.value}</span>
                <p className="metric-label">{metric.label}</p>
              </div>
              <div className="metric-hover-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
