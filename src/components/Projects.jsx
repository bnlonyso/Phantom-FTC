import React, { useState } from "react";
import { Cpu, Settings, PenTool, Code2, ShieldAlert, Award } from "lucide-react";

export default function Projects() {
  const [activeSpecRobot, setActiveSpecRobot] = useState("v2");
  const [activeSpecTab, setActiveSpecTab] = useState("mech");

  const robots = [
    {
      id: "v2",
      name: "Phantomaz \"Viper\"",
      season: "Season 2025–2026 (Into the Deep / DECODE)",
      image: "/images/phantom_dark.png",
      badge: "Champion & Record Holder",
      summary: "Our flagship robot for the current season. Features an innovative active intake rollers assembly, a precision linear slide lift, and dead-wheel odometry pods to track roadrunner trajectories.",
      specs: {
        mech: [
          { label: "Drivetrain Base", val: "4x Mecanum wheels 104mm, lightweight 3D support plates" },
          { label: "Motors", val: "GoBilda Yellow Jacket 19.2:1 (435 RPM) with high-res encoders" },
          { label: "Drive transmission", val: "Direct drive via GoBilda splined shafts" }
        ],
        intake: [
          { label: "Intake Mechanism", val: "Active silicon rollers with floating suspension bridge design" },
          { label: "Servos", val: "REV Smart Robot Servo for automated element deployment tilt" },
          { label: "Cycling Speed", val: "Game element capture under 0.4 seconds from floor tiles" }
        ],
        lift: [
          { label: "Construction", val: "3-stage telescopic linear slides using structural aerospace aluminum" },
          { label: "Actuators", val: "Dual GoBilda 5.2:1 motors (1150 RPM) on high-tension Kevlar string" },
          { label: "Sensor Limits", val: "Magnetic limit switches for automatic lift zero resets" }
        ],
        software: [
          { label: "Localization", val: "PedroPathing path planning, 2-wheel dead-wheel odometry pods and pinpoint" },
          { label: "Vision System", val: "Limelight 3A camera for AprilTag reading and drift corrections" },
          { label: "Autonomous Routine", val: "100% stable 3-element cycle deposit under 30 seconds" }
        ]
      },
      highlights: [
        "1st Place Alliance Partner at FTC DECODE 2026",
        "Kazakhstan Previous National Record (766 points in a match)",
        "Qualified for Asia Championship Tournament"
      ]
    }
  ];

  const getSpecTabIcon = (tab) => {
    switch (tab) {
      case "mech": return <Settings size={14} />;
      case "intake": return <ShieldAlert size={14} />;
      case "lift": return <PenTool size={14} />;
      case "software": return <Code2 size={14} />;
      default: return null;
    }
  };

  const scrollToSpecs = (robotId) => {
    setActiveSpecRobot(robotId);
    setActiveSpecTab("mech");
    const section = document.getElementById("robot-specs");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const selectedRobot = robots.find(r => r.id === activeSpecRobot) || robots[0];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-heading reveal">
          <h2 className="section-title">Our Robots</h2>
          <p className="section-subtitle">
            The engineering evolution of Phantom. From simple attachments to autonomous systems.
          </p>
        </div>

        {/* Robot Cards Grid */}
        <div className="robots-grid">
          {robots.map((robot) => (
            <div key={robot.id} className="robot-card-large glass reveal">
              <div className="robot-card-visual">
                <img 
                  src={robot.image} 
                  alt={robot.name} 
                  className="robot-card-img"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80"; // fallback
                  }}
                />
              </div>
              
              <div className="robot-card-details">
                <div className="robot-badge-row">
                  <span className="robot-card-badge">{robot.badge}</span>
                  <span className="robot-card-season">{robot.season}</span>
                </div>
                <h3 className="robot-card-name">{robot.name}</h3>
                <p className="robot-card-summary">{robot.summary}</p>
                
                <div className="robot-highlights">
                  <h4 className="highlights-title">Key Season Achievements:</h4>
                  <ul className="highlights-list">
                    {robot.highlights.map((h, i) => (
                      <li key={i} className="highlight-item">
                        <Award size={14} className="text-cyan" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button 
                  onClick={() => scrollToSpecs(robot.id)}
                  className={`btn-secondary robot-spec-trigger ${activeSpecRobot === robot.id ? "active-border" : ""}`}
                >
                  View Specifications
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Spec Sheet Console */}
        <div id="robot-specs" className="spec-sheet-console glass reveal">
          <div className="console-header">
            <h3 className="console-title">Technical Specifications: {selectedRobot.name}</h3>
          </div>

          <div className="console-tabs">
            {[
              { id: "mech", label: "Chassis & Base" },
              { id: "intake", label: "Intake System" },
              { id: "lift", label: "Linear Slide / Lifts" },
              { id: "software", label: "Code & Autonomous" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSpecTab(tab.id)}
                className={`console-tab ${activeSpecTab === tab.id ? "active" : ""}`}
              >
                {getSpecTabIcon(tab.id)}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="console-content">
            <table className="spec-table">
              <tbody>
                {selectedRobot.specs[activeSpecTab].map((spec, i) => (
                  <tr key={i} className="spec-row">
                    <td className="spec-label-cell">{spec.label}</td>
                    <td className="spec-val-cell">{spec.val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      <style>{`
        .projects-section {
          padding: 100px 0;
          background-color: var(--bg-primary);
        }

        .robots-grid {
          display: flex;
          flex-direction: column;
          gap: 4rem;
          margin-bottom: 60px;
        }

        .robot-card-large {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          box-shadow: var(--glass-shadow);
        }

        .robot-card-visual {
          position: relative;
          background: radial-gradient(circle, rgba(182, 15, 243, 0.1) 0%, transparent 80%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem;
        }

        .robot-card-img {
          width: 100%;
          max-width: 320px;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 15px 30px rgba(0,0,0,0.25));
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .robot-card-large:hover .robot-card-img {
          transform: scale(1.05) rotate(2deg);
        }

        .robot-card-details {
          padding: 4rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .robot-badge-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          align-items: center;
          margin-bottom: 1.25rem;
        }

        .robot-card-badge {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          background: rgba(182, 15, 243, 0.08);
          color: var(--accent-purple);
          padding: 4px 10px;
          border-radius: 4px;
          border: 1px solid rgba(182, 15, 243, 0.15);
        }

        .robot-card-season {
          font-size: 0.8rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .robot-card-name {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .robot-card-summary {
          font-size: 1.05rem;
          margin-bottom: 2rem;
        }

        .robot-highlights {
          margin-bottom: 2.5rem;
        }

        .highlights-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 10px;
        }

        .highlights-list {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .robot-spec-trigger {
          width: fit-content;
        }

        .robot-spec-trigger.active-border {
          border-color: var(--accent-cyan);
          background: rgba(0, 240, 255, 0.05);
        }

        /* Technical Spec Sheet Console */
        .spec-sheet-console {
          border-radius: var(--border-radius-lg);
          padding: 3rem;
          box-shadow: var(--glass-shadow);
        }

        .console-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--glass-border);
          padding-bottom: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .console-title {
          font-size: 1.5rem;
        }


        .console-tabs {
          display: flex;
          gap: 8px;
          margin-bottom: 2rem;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .console-tabs::-webkit-scrollbar {
          display: none;
        }

        .console-tab {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--bg-secondary);
          border: 1px solid var(--glass-border);
          color: var(--text-secondary);
          padding: 10px 20px;
          font-size: 0.875rem;
          font-weight: 600;
          border-radius: var(--border-radius-md);
          cursor: pointer;
          transition: var(--transition-fast);
          white-space: nowrap;
        }

        .console-tab:hover {
          color: var(--text-primary);
          border-color: var(--text-tertiary);
        }

        .console-tab.active {
          background: rgba(182, 15, 243, 0.08);
          color: var(--accent-purple);
          border-color: var(--accent-purple);
        }

        .console-content {
          background: var(--bg-secondary);
          border-radius: var(--border-radius-md);
          border: 1px solid var(--glass-border);
          overflow: hidden;
        }

        .spec-table {
          width: 100%;
          border-collapse: collapse;
        }

        .spec-row {
          border-bottom: 1px solid var(--glass-border);
        }

        .spec-row:last-child {
          border-bottom: none;
        }

        .spec-label-cell {
          width: 25%;
          padding: 1.25rem 2rem;
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--text-primary);
          border-right: 1px solid var(--glass-border);
          background: rgba(0,0,0,0.05);
        }

        .spec-val-cell {
          padding: 1.25rem 2rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        @media (max-width: 1024px) {
          .robot-card-large {
            grid-template-columns: 1fr;
          }
          .robot-card-details {
            padding: 2.5rem;
          }
          .robot-card-visual {
            padding: 2rem;
          }
        }

        @media (max-width: 768px) {
          .console-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          .console-tabs {
            flex-wrap: nowrap;
          }
          .spec-label-cell {
            width: 35%;
            padding: 1rem;
          }
          .spec-val-cell {
            padding: 1rem;
          }
          .spec-sheet-console {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
