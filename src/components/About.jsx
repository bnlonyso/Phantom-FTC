import React from "react";
import { Calendar, Award, BookOpen, Layers } from "lucide-react";

export default function About() {
  const stats = [
    {
      icon: <Calendar className="stat-icon text-purple" size={24} />,
      value: "1",
      label: "FTC Seasons",
      description: "First year of hands-on mechanical designs and iterations."
    },
    {
      icon: <Award className="stat-icon text-cyan" size={24} />,
      value: "5",
      label: "Awards Won",
      description: "Victories at regional and national tournament stages."
    },
    {
      icon: <BookOpen className="stat-icon text-purple" size={24} />,
      value: "3",
      label: "Tutorials",
      description: "Educational videos and documentation templates for rookie teams."
    },
    {
      icon: <Layers className="stat-icon text-cyan" size={24} />,
      value: "5",
      label: "Comics Published",
      description: "Original illustrated logs depicting our team's daily life."
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-heading reveal">
          <h2 className="section-title">We Are Phantom FTC</h2>
          <p className="section-subtitle">
            A fusion of cutting-edge engineering, code development, and a passion for STEM education.
          </p>
        </div>

        {/* Intro Grid */}
        <div className="about-intro-grid">
          <div className="about-text-card glass reveal">
            <h3 className="card-title">Who We Are</h3>
            <p className="card-text">
              Our team brings together talented students from NIS Shymkent. For us, robotics is more than a tournament - it's an opportunity to test the limits of applied science, solve complex mechanics under tight deadlines, and inspire others to engage in technology.
            </p>
            <p className="card-text">
              We strictly believe in the core values of <strong>Gracious Professionalism</strong> and <strong>Coopertition</strong>. That's why we document all of our learnings in open guides, documentation templates, and humor-filled webcomics.
            </p>
          </div>

          <div className="about-photo-card reveal">
            <img src="/images/team_02.jpg" alt="Team workshop" className="about-img" />
            <div className="photo-card-overlay">
              <span className="overlay-tag">NIS Workshop</span>
              <span className="overlay-desc">Drivetrain assembly and hardware debug routines</span>
            </div>
          </div>
        </div>

        {/* Achievements Callout */}
        <div className="achievements-banner reveal">
          <div className="banner-left">
            <div className="record-badge">Kazakhstan National Record</div>
            <h3 className="banner-title">766 Points at Almaty Regional!</h3>
            <p className="banner-desc">
              Our team set a new national record for the highest match score in a single alliance match. Furthermore, at the <strong>FTC DECODE 2025–2026</strong> championship, we placed 1st in the Alliance and earned a ticket to the Asia Championship!
            </p>
          </div>
          <div className="banner-right">
            <div className="record-circle">
              <span className="record-num text-cyan">766</span>
              <span className="record-lbl">POINTS</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card glass reveal reveal-delay-1">
              <div className="stat-card-header">
                {stat.icon}
                <span className="stat-number">{stat.value}</span>
              </div>
              <h4 className="stat-label">{stat.label}</h4>
              <p className="stat-desc">{stat.description}</p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .about-section {
          padding: 100px 0;
          background-color: var(--bg-primary);
          position: relative;
        }

        .section-heading {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 60px;
        }

        .section-title {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
        }

        .about-intro-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .about-text-card {
          padding: 3rem;
          border-radius: var(--border-radius-lg);
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 1.5rem;
        }

        .card-title {
          font-size: 1.75rem;
        }

        .card-text {
          font-size: 1.05rem;
        }

        .about-photo-card {
          position: relative;
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          box-shadow: var(--card-shadow);
        }

        .about-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .about-photo-card:hover .about-img {
          transform: scale(1.03);
        }

        .photo-card-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 2rem;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 100%);
          color: #ffffff;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .overlay-tag {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent-cyan);
        }

        .overlay-desc {
          font-size: 0.95rem;
          opacity: 0.9;
        }

        /* Achievements Banner */
        .achievements-banner {
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 3rem;
          align-items: center;
          background: linear-gradient(135deg, rgba(182, 15, 243, 0.1) 0%, rgba(0, 240, 255, 0.05) 100%);
          border: 1px solid var(--glass-border);
          border-radius: var(--border-radius-lg);
          padding: 3.5rem;
          margin-bottom: 3rem;
          box-shadow: var(--glass-shadow);
        }

        .record-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--accent-cyan);
          background-color: rgba(0, 240, 255, 0.1);
          padding: 4px 12px;
          border-radius: var(--border-radius-full);
          margin-bottom: 1rem;
          border: 1px solid rgba(0, 240, 255, 0.2);
        }

        .banner-title {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .banner-desc {
          font-size: 1.05rem;
          color: var(--text-secondary);
        }

        .banner-right {
          display: flex;
          justify-content: center;
        }

        .record-circle {
          width: 160px;
          height: 160px;
          border-radius: 50%;
          border: 4px solid var(--glass-border);
          background: var(--bg-primary);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          box-shadow: 0 10px 30px rgba(0, 240, 255, 0.15);
          animation: border-glow 4s infinite alternate;
        }

        .record-num {
          font-family: var(--font-heading);
          font-size: 3rem;
          font-weight: 800;
          line-height: 1;
        }

        .record-lbl {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: var(--text-secondary);
          margin-top: 4px;
        }

        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .stat-card {
          padding: 2rem;
          border-radius: var(--border-radius-md);
          transition: var(--transition-smooth);
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--glass-shadow);
          border-color: var(--accent-purple);
        }

        .stat-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .stat-icon {
          padding: 8px;
          background: var(--bg-secondary);
          border-radius: 12px;
          border: 1px solid var(--glass-border);
        }

        .stat-number {
          font-family: var(--font-heading);
          font-size: 2.25rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .stat-label {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .stat-desc {
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        @keyframes border-glow {
          0% { border-color: rgba(182, 15, 243, 0.2); }
          100% { border-color: rgba(0, 240, 255, 0.6); }
        }

        @media (max-width: 1024px) {
          .about-intro-grid {
            grid-template-columns: 1fr;
          }
          .achievements-banner {
            grid-template-columns: 1fr;
            text-align: center;
            padding: 2.5rem;
            gap: 2rem;
          }
          .banner-right {
            order: -1;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .about-text-card {
            padding: 1.5rem;
          }
          .stats-grid {
            grid-template-columns: 1fr;
          }
          .banner-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
