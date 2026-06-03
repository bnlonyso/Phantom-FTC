import React from "react";
import { Play, BookOpen, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>
      
      <div className="container hero-container">
        <div className="hero-text-content">
          <div className="hero-badge">FIRST Tech Challenge Team #33830</div>
          
          <h1 className="hero-title">
            <span className="hero-title-line line-1">Building Robots.</span>
            <span className="hero-title-line line-2">Sharing Knowledge.</span>
            <span className="hero-title-line line-3">Inspiring Innovation.</span>
          </h1>
          
          <p className="hero-subtitle">
            We are the Phantom FTC engineering and programming team. We design high-performance robots, publish open educational tutorials, and foster the STEM community across Kazakhstan.
          </p>
          
          <div className="hero-buttons">
            <a href="#tutorials" className="btn-primary">
              <Play size={18} fill="currentColor" />
              <span>Watch Tutorials</span>
            </a>
            <a href="#comics" className="btn-secondary">
              <BookOpen size={18} />
              <span>Read Comics</span>
            </a>
          </div>
        </div>
        
        <div className="hero-visual-content">
          <div className="robot-render-wrapper">
            <img 
              src="/images/phantom_dark.png" 
              alt="Phantom FTC Robot Render" 
              className="robot-render-img dark-only"
            />
            <img 
              src="/images/phantom.png" 
              alt="Phantom FTC Robot Render" 
              className="robot-render-img light-only"
            />
            <div className="render-shadow"></div>
          </div>
        </div>
      </div>
      
      <a href="#about" className="scroll-indicator" aria-label="Scroll Down">
        <span className="scroll-indicator-text">Discover More About Us</span>
        <ArrowDown className="scroll-indicator-icon" size={16} />
      </a>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 80px;
          padding-bottom: 60px;
          overflow: hidden;
          background-color: var(--bg-primary);
        }

        /* Apple-like ambient gradient glows */
        .hero-glow-1 {
          position: absolute;
          top: -20%;
          right: -10%;
          width: 50%;
          height: 60%;
          background: radial-gradient(circle, rgba(182, 15, 243, 0.15) 0%, transparent 70%);
          z-index: 1;
          pointer-events: none;
        }

        .hero-glow-2 {
          position: absolute;
          bottom: -10%;
          left: -10%;
          width: 45%;
          height: 50%;
          background: radial-gradient(circle, rgba(0, 240, 255, 0.1) 0%, transparent 60%);
          z-index: 1;
          pointer-events: none;
        }

        .hero-container {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 3rem;
          align-items: center;
          width: 100%;
        }

        .hero-badge {
          display: inline-block;
          font-family: var(--font-sans);
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent-purple);
          margin-bottom: 1.5rem;
          padding: 6px 14px;
          background: rgba(182, 15, 243, 0.08);
          border-radius: var(--border-radius-full);
          border: 1px solid rgba(182, 15, 243, 0.15);
        }

        .hero-title {
          font-family: var(--font-heading);
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.04em;
          margin-bottom: 2rem;
          display: flex;
          flex-direction: column;
        }

        .hero-title-line {
          opacity: 0;
          transform: translateY(20px);
          animation: fade-slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .line-1 { animation-delay: 0.2s; color: var(--text-primary); }
        .line-2 { animation-delay: 0.4s; color: var(--text-secondary); }
        .line-3 { 
          animation-delay: 0.6s;
          background: var(--accent-gradient-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.15rem;
          line-height: 1.6;
          color: var(--text-secondary);
          max-width: 580px;
          margin-bottom: 2.5rem;
          opacity: 0;
          transform: translateY(20px);
          animation: fade-slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.8s forwards;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          opacity: 0;
          transform: translateY(20px);
          animation: fade-slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1s forwards;
        }

        .hero-visual-content {
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transform: scale(0.95);
          animation: scale-fade-in 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards;
        }

        .robot-render-wrapper {
          position: relative;
          width: 100%;
          max-width: 440px;
          aspect-ratio: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .robot-render-img {
          width: 100%;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 20px 50px rgba(0, 0, 0, 0.3));
          animation: float-slow 6s ease-in-out infinite alternate;
        }

        [data-theme="light"] .dark-only { display: none; }
        [data-theme="dark"] .light-only { display: none; }

        .render-shadow {
          position: absolute;
          bottom: 0;
          width: 70%;
          height: 20px;
          background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.2) 0%, transparent 70%);
          filter: blur(10px);
          animation: shadow-breathe 6s ease-in-out infinite alternate;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: var(--text-secondary);
          transition: var(--transition-fast);
          opacity: 0;
          animation: fade-in 1s ease 1.5s forwards;
        }

        .scroll-indicator:hover {
          color: var(--text-primary);
          transform: translateY(2px);
        }

        .scroll-indicator-text {
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .scroll-indicator-icon {
          animation: bounce-slow 2s infinite;
        }

        /* Animations */
        @keyframes fade-slide-up {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-fade-in {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fade-in {
          to { opacity: 1; }
        }

        @keyframes float-slow {
          0% { transform: translateY(0); }
          100% { transform: translateY(-15px); }
        }

        @keyframes shadow-breathe {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(0.85); opacity: 0.4; }
        }

        @keyframes bounce-slow {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-6px); }
          60% { transform: translateY(-3px); }
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }
          
          .hero-text-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          
          .hero-subtitle {
            margin-inline: auto;
          }
          
          .hero-visual-content {
            order: -1;
            margin-bottom: 1rem;
          }
          
          .robot-render-wrapper {
            max-width: 320px;
          }
        }

        @media (max-width: 640px) {
          .hero-buttons {
            flex-direction: column;
            width: 100%;
            padding: 0 1rem;
          }
          .hero-buttons > a {
            justify-content: center;
            width: 100%;
          }
          .scroll-indicator {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
