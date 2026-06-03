import React from "react";
import { learningHubResources } from "../data/tutorialData";
import { FileText, Box, HelpCircle, ArrowRight } from "lucide-react";

export default function LearningHub() {
  const getResourceIcon = (type) => {
    switch (type.toLowerCase()) {
      case "pdf guide":
        return <FileText className="res-icon text-red" size={20} />;
      case "github repo":
        return (
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="res-icon text-purple" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        );
      case "cad library":
        return <Box className="res-icon text-cyan" size={20} />;
      default:
        return <HelpCircle className="res-icon text-silver" size={20} />;
    }
  };

  const getActionText = (type) => {
    if (type.toLowerCase().includes("repo")) return "Open GitHub";
    if (type.toLowerCase().includes("library")) return "Open CAD";
    return "Download PDF";
  };

  const tips = [
    {
      title: "Calibrate Odometry Meticulously",
      desc: "Wheel radius and wheelbase width errors accumulate during autonomous paths. Spend at least two days calibrating your localizer parameters."
    },
    {
      title: "Use Protective Shields",
      desc: "On-field collisions are inevitable. Thin polycarbonate shields protect sensitive electronics and wire runs from foreign robot attachments."
    },
    {
      title: "Maintain Version Control",
      desc: "Utilize Git versioning. Keep test features in separate experimental branches and maintain a clean main branch before match queues."
    }
  ];

  return (
    <section className="learning-hub-section">
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-heading reveal">
          <h2 className="section-title">Resources & Useful Tips</h2>
          <p className="section-subtitle">
            Download custom blueprints, programming templates, and cheat sheets developed by our team to accelerate your engineering workflow.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="resources-grid">
          {learningHubResources.map((res) => (
            <div key={res.id} className="resource-card glass reveal">
              <div className="res-card-header">
                <div className="res-type-badge">
                  {getResourceIcon(res.type)}
                  <span>{res.type}</span>
                </div>
                <span className="res-tag">{res.tag}</span>
              </div>
              <h3 className="res-title">{res.title}</h3>
              <p className="res-desc">{res.description}</p>
              
              <a 
                href={res.downloadUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="res-action-btn"
              >
                <span>{getActionText(res.type)}</span>
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* Quick Tips Segment */}
        <div className="tips-container reveal">
          <h3 className="tips-section-title">Tips from Champions</h3>
          <div className="tips-grid">
            {tips.map((tip, idx) => (
              <div key={idx} className="tip-item">
                <div className="tip-number">{String(idx + 1).padStart(2, "0")}</div>
                <div className="tip-content">
                  <h4 className="tip-title">{tip.title}</h4>
                  <p className="tip-desc">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .learning-hub-section {
          padding: 80px 0 100px;
          background-color: var(--bg-secondary);
        }

        .resources-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-bottom: 60px;
        }

        .resource-card {
          padding: 2rem;
          border-radius: var(--border-radius-lg);
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: var(--transition-smooth);
        }

        .resource-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--glass-shadow);
          border-color: var(--accent-cyan);
        }

        .res-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }

        .res-type-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .res-icon {
          color: var(--accent-purple);
        }

        .res-tag {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          background: rgba(0, 240, 255, 0.08);
          color: var(--accent-cyan);
          padding: 2px 8px;
          border-radius: 4px;
        }

        .res-title {
          font-size: 1.15rem;
          margin-bottom: 10px;
          line-height: 1.35;
        }

        .res-desc {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 2rem;
          flex-grow: 1;
        }

        .res-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--accent-purple);
          width: fit-content;
          transition: var(--transition-fast);
        }

        .res-action-btn:hover {
          color: var(--text-primary);
          transform: translateX(4px);
        }

        /* Tips Section */
        .tips-container {
          background: var(--bg-primary);
          border: 1px solid var(--glass-border);
          border-radius: var(--border-radius-lg);
          padding: 3rem;
          box-shadow: var(--card-shadow);
        }

        .tips-section-title {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          text-align: center;
        }

        .tips-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .tip-item {
          display: flex;
          gap: 1rem;
        }

        .tip-number {
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 800;
          color: var(--accent-cyan);
          opacity: 0.8;
          line-height: 1;
        }

        .tip-content {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .tip-title {
          font-size: 1rem;
          font-weight: 700;
        }

        .tip-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        @media (max-width: 1024px) {
          .tips-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .tips-container {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
