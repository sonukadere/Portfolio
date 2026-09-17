import React, { useState } from 'react';
import { initialPortfolioData } from './data/portfolioData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import InteractiveTerminal from './components/InteractiveTerminal';
import Experience from './components/Experience';
import Education from './components/Education';
import ResumeCTA from './components/ResumeCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EditModal from './components/EditModal';
import { Sparkles } from 'lucide-react';
import './App.css';

export default function App() {
  const [portfolioData, setPortfolioData] = useState(() => {
    try {
      const saved = localStorage.getItem('portfolio_user_data_v4');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed?.personal?.name === 'Sonu Kadere') {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Could not read saved portfolio data:', e);
    }
    return initialPortfolioData;
  });

  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleSaveData = (newData) => {
    setPortfolioData(newData);
    try {
      localStorage.setItem('portfolio_user_data_v4', JSON.stringify(newData));
    } catch (e) {
      console.warn('Could not save portfolio data to localStorage:', e);
    }
  };

  const handleResetData = () => {
    setPortfolioData(initialPortfolioData);
    try {
      localStorage.removeItem('portfolio_user_data');
      localStorage.removeItem('portfolio_user_data_v2');
      localStorage.removeItem('portfolio_user_data_v3');
      localStorage.removeItem('portfolio_user_data_v4');
    } catch (e) {
      console.warn('Could not reset localStorage:', e);
    }
    setIsEditOpen(false);
  };

  return (
    <div className="portfolio-app">
      {/* Sticky Responsive Header */}
      <Navbar 
        data={portfolioData} 
        onOpenEdit={() => setIsEditOpen(true)} 
      />

      <main className="main-content">
        {/* Hero Section */}
        <Hero data={portfolioData} />

        {/* Quick Metric Cards */}
        <Metrics data={portfolioData} />

        {/* About Me Section */}
        <About data={portfolioData} />

        {/* Skills Section */}
        <Skills data={portfolioData} />

        {/* Featured Projects Section */}
        <Projects data={portfolioData} />

        {/* Interactive Developer Terminal ("Ask Dev") */}
        <InteractiveTerminal data={portfolioData} />

        {/* Professional Experience Timeline */}
        <Experience data={portfolioData} />

        {/* Academic Education */}
        <Education data={portfolioData} />

        {/* Resume Download / View CTA */}
        <ResumeCTA data={portfolioData} />

        {/* Contact & Inquiry Section */}
        <Contact data={portfolioData} />
      </main>

      {/* Footer */}
      <Footer data={portfolioData} />

      {/* Floating Customize Info Button */}
      <button 
        type="button" 
        className="floating-customize-btn"
        onClick={() => setIsEditOpen(true)}
        title="Customize Portfolio Data"
      >
        <Sparkles size={16} />
        <span>Customize Info</span>
      </button>

      {/* In-browser Live Data Customizer */}
      <EditModal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        data={portfolioData}
        onSave={handleSaveData}
        onReset={handleResetData}
      />
    </div>
  );
}
