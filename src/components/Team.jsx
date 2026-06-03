import React, { useState } from "react";
import { teamData } from "../data/teamData";
import { User, Cpu, Code2, PenTool, Radio, Compass } from "lucide-react";

export default function Team() {
  const [activeRoleFilter, setActiveRoleFilter] = useState("all");

  const getRoleIcon = (role) => {
    const r = role.toLowerCase();
    if (r.includes("mentor")) return <User size={16} />;
    if (r.includes("captain")) return <Compass size={16} />;
    if (r.includes("builder") || r.includes("cad")) return <Cpu size={16} />;
    if (r.includes("coder") || r.includes("programmer")) return <Code2 size={16} />;
    if (r.includes("designer")) return <PenTool size={16} />;
    if (r.includes("smm") || r.includes("external")) return <Radio size={16} />;
    return <User size={16} />;
  };

  const categories = [
    { id: "all", label: "All" },
    { id: "lead", label: "Leadership" },
    { id: "tech", label: "Technical Dept." },
    { id: "creative", label: "Creative Dept." }
  ];

  const filteredTeam = teamData.filter((member) => {
    if (activeRoleFilter === "all") return true;
    const role = member.role.toLowerCase();
    if (activeRoleFilter === "lead") {
      return role.includes("mentor") || role.includes("captain");
    }
    if (activeRoleFilter === "tech") {
      return role.includes("builder") || role.includes("coder") || role.includes("programmer") || role.includes("cad");
    }
    if (activeRoleFilter === "creative") {
      return role.includes("designer") || role.includes("smm") || role.includes("external");
    }
    return true;
  });

  return (
    <section id="team" className="team-section">
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-heading reveal">
          <h2 className="section-title">Meet the Team</h2>
          <p className="section-subtitle">
            Engineers, coders, and designers building the future with their own hands.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="team-filters reveal">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveRoleFilter(cat.id)}
              className={`filter-tab ${activeRoleFilter === cat.id ? "active" : ""}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="team-grid">
          {filteredTeam.map((member) => (
            <div key={member.id} className="team-card glass reveal">
              <div className="member-image-wrapper">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="member-img"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80"; // fallback
                  }}
                />
                <div className="member-role-badge">
                  {getRoleIcon(member.role)}
                  <span>{member.role}</span>
                </div>
              </div>
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-desc">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .team-section {
          padding: 100px 0;
          background-color: var(--bg-secondary);
        }

        .team-filters {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 40px;
        }

        .filter-tab {
          background: var(--bg-primary);
          border: 1px solid var(--glass-border);
          color: var(--text-secondary);
          padding: 8px 20px;
          font-size: 0.9rem;
          font-weight: 500;
          border-radius: var(--border-radius-full);
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .filter-tab:hover, .filter-tab.active {
          background: var(--accent-gradient);
          color: #ffffff;
          border-color: transparent;
          box-shadow: 0 4px 12px rgba(182, 15, 243, 0.2);
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2rem;
        }

        .team-card {
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          transition: var(--transition-smooth);
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .team-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--glass-shadow);
          border-color: var(--accent-purple);
        }

        .member-image-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 0.85;
          overflow: hidden;
          background-color: var(--bg-secondary);
        }

        .member-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .team-card:hover .member-img {
          transform: scale(1.05);
        }

        .member-role-badge {
          position: absolute;
          bottom: 12px;
          left: 12px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          color: #ffffff;
          padding: 6px 12px;
          border-radius: var(--border-radius-full);
          font-size: 0.75rem;
          font-weight: 600;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .member-info {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex-grow: 1;
        }

        .member-name {
          font-size: 1.2rem;
          font-weight: 700;
        }

        .member-desc {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        @media (max-width: 640px) {
          .team-filters {
            flex-wrap: wrap;
          }
          .team-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
