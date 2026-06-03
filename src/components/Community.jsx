import React, { useState } from "react";
import { Handshake, Heart, Send, Check } from "lucide-react";

export default function Community() {
  const [formData, setFormData] = useState({
    name: "",
    org: "",
    email: "",
    msg: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    
    // Simulate API request
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", org: "", email: "", msg: "" });
    }, 2000);
  };

  const handleReset = () => {
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="community-section">
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-heading reveal">
          <h2 className="section-title">Community & Sponsorship</h2>
          <p className="section-subtitle">
            We cultivate engineering culture and are always open to collaboration with other teams and sponsors.
          </p>
        </div>

        <div className="community-grid">
          {/* Outreach & Mission Info */}
          <div className="community-info-side reveal">
            <div className="info-card glass">
              <div className="info-icon-wrapper">
                <Handshake size={24} className="text-purple" />
              </div>
              <h3 className="info-card-title">FTC Collaboration</h3>
              <p className="info-card-text">
                Want to host a joint scrimmage, test your autonomous path planning on our field, or schedule a workshop? We are happy to share our space and assist in debugging code. Get in touch!
              </p>
            </div>

            <div className="info-card glass">
              <div className="info-icon-wrapper">
                <Heart size={24} className="text-cyan" />
              </div>
              <h3 className="info-card-title">Our Mission</h3>
              <p className="info-card-text">
                We aim to make quality STEM education accessible. Our goal is to inspire students in Kazakhstan to pursue advanced engineering, guide them in robot programming, and help rookie teams clear initial FTC hurdles.
              </p>
            </div>
          </div>

          {/* Contact / Sponsor Form */}
          <div className="community-form-side reveal">
            <div className="form-card glass">
              <h3 className="form-card-title">Become a Sponsor / Get In Touch</h3>
              <p className="form-card-subtitle">
                Support our team — invest in the development of tomorrow's engineers and technology leaders.
              </p>

              {isSubmitted ? (
                <div className="form-success-container">
                  <div className="success-circle">
                    <Check size={28} />
                  </div>
                  <h4>Message Sent!</h4>
                  <p>Thank you for your support. We will get back to you within 24 hours.</p>
                  <button onClick={handleReset} className="btn-secondary btn-sm">
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="sponsor-form">
                  <div className="form-group">
                    <label htmlFor="form-name">Your Name *</label>
                    <input 
                      type="text" 
                      id="form-name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="form-org">Organization / Company</label>
                    <input 
                      type="text" 
                      id="form-org"
                      value={formData.org}
                      onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                      placeholder="TechCorp LLC"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="form-email">Email Address *</label>
                    <input 
                      type="email" 
                      id="form-email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="example@mail.com"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="form-msg">Message / Inquiry</label>
                    <textarea 
                      id="form-msg"
                      rows="4"
                      value={formData.msg}
                      onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
                      placeholder="Hello! We would love to sponsor your team..."
                      className="form-textarea"
                    />
                  </div>

                  <button type="submit" className="btn-primary form-submit-btn">
                    <Send size={16} />
                    <span>Send Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .community-section {
          padding: 100px 0;
          background-color: var(--bg-primary);
          position: relative;
          z-index: 2;
        }

        /* Videos Section */
        .videos-section {
          margin-bottom: 4rem;
        }

        .videos-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 2rem;
          text-align: center;
        }

        .videos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .video-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          border-radius: var(--border-radius-lg);
          background: var(--bg-secondary);
          border: 1px solid var(--glass-border);
          text-decoration: none;
          color: var(--text-primary);
          transition: var(--transition-fast);
          cursor: pointer;
        }

        .video-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent-purple);
          box-shadow: 0 8px 24px rgba(182, 15, 243, 0.2);
        }

        .video-player {
          padding: 0;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-secondary);
          min-height: 250px;
        }

        .video-player video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .video-thumbnail {
          width: 80px;
          height: 80px;
          border-radius: 12px;
          background: linear-gradient(135deg, var(--accent-purple), var(--accent-cyan));
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin-bottom: 1rem;
        }

        .video-label {
          font-size: 0.85rem;
          font-weight: 600;
          text-align: center;
        }

        .community-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: flex-start;
        }

        .community-info-side {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .info-card {
          padding: 2.5rem;
          border-radius: var(--border-radius-lg);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .info-icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: var(--bg-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--glass-border);
          margin-bottom: 8px;
        }

        .info-card-title {
          font-size: 1.35rem;
          font-weight: 700;
        }

        .info-card-text {
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* Form styling */
        .form-card {
          padding: 3rem;
          border-radius: var(--border-radius-lg);
        }

        .form-card-title {
          font-size: 1.5rem;
          margin-bottom: 8px;
        }

        .form-card-subtitle {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.4;
        }

        .sponsor-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .form-input, .form-textarea {
          background: var(--bg-secondary);
          border: 1px solid var(--glass-border);
          border-radius: var(--border-radius-sm);
          padding: 10px 14px;
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 0.95rem;
          outline: none;
          transition: var(--transition-fast);
        }

        .form-input:focus, .form-textarea:focus {
          border-color: var(--accent-purple);
          background: var(--bg-primary);
          box-shadow: 0 0 0 3px rgba(182, 15, 243, 0.15);
        }

        .form-textarea {
          resize: vertical;
        }

        .form-submit-btn {
          width: 100%;
          justify-content: center;
          margin-top: 10px;
        }

        /* Success screen styling */
        .form-success-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem 0;
          text-align: center;
          gap: 1rem;
        }

        .success-circle {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #34c759;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 20px rgba(52, 199, 89, 0.3);
          animation: scale-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .form-success-container h4 {
          font-size: 1.25rem;
        }

        .form-success-container p {
          font-size: 0.9rem;
          max-width: 280px;
          margin-bottom: 12px;
        }

        @keyframes scale-up {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        @media (max-width: 1024px) {
          .community-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .form-card {
            padding: 2rem 1.5rem;
          }
          .videos-grid {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
