import React, { useState } from "react";
import { Send, Cpu } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setEmail("");
    }, 2000);
  };

  return (
    <footer className="footer-element">
      <div className="container footer-grid">
        
        {/* Col 1: Brand Info */}
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <Cpu className="logo-icon" size={24} />
            <span>PHANTOM FTC</span>
          </div>
          <p className="brand-desc">
            Development of engineering thinking, programming skills, and teamwork through the design, construction, and operation of competitive robots for the FIRST Tech Challenge.
          </p>
        </div>

        {/* Col 2: Shortcuts */}
        <div className="footer-col links-col">
          <h4 className="footer-col-title">Navigation</h4>
          <ul className="footer-links-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About the Team</a></li>
            <li><a href="#projects">Our Robots</a></li>
            <li><a href="#tutorials">Learning Center</a></li>
            <li><a href="#comics">Our Comics</a></li>
          </ul>
        </div>

        {/* Col 3: Contacts */}
        <div className="footer-col contacts-col">
          <h4 className="footer-col-title">Contact Us</h4>
          <p className="contact-item">NIS Shymkent-Abay, Elite Town Residential Complex, Building 6</p>
          <p className="contact-item font-semi">+7 771 544 6173</p>
          <p className="contact-item">
            <a href="mailto:nomadxftc@gmail.com" className="contact-email-link">
              phantomftc@gmail.com
            </a>
          </p>
        </div>

        {/* Col 4: Newsletter */}
        <div className="footer-col newsletter-col">
          <h4 className="footer-col-title">Newsletter Subscription</h4>
          <p className="newsletter-subtitle">
            Stay updated with new tutorials, engineering designs, and the latest comic releases!
          </p>
          
          {isSubscribed ? (
            <div className="subscribe-success">You have successfully subscribed!</div>
          ) : (
            <form onSubmit={handleSubscribe} className="subscribe-form">
              <input 
                type="email" 
                placeholder="Your email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="subscribe-input"
              />
              <button type="submit" className="subscribe-btn" aria-label="Subscribe">
                <Send size={14} />
              </button>
            </form>
          )}

          <div className="social-links-container">
            <h5 className="socials-title font-semi">Мы в соцсетях:</h5>
            <div className="social-icons-row">
              <a 
                href="https://www.instagram.com/phantom.ftc/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-link inst"
                aria-label="Instagram"
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>
              <a 
                href="https://www.youtube.com/@PhantomFTC" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-link yt"
                aria-label="YouTube"
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
              </a>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-link tt"
                aria-label="TikTok"
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <span className="tiktok-svg-icon">🎦</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="container bottom-bar-content">
          <span className="copyright-text">
            Copyright &copy; 2026 Phantom FTC Team #33830. All Rights Reserved.
          </span>
          <span className="bottom-meta-text">Designed with Apple Aesthetics</span>
        </div>
      </div>

      <style>{`
        .footer-element {
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--glass-border);
          padding-top: 80px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.7fr 1.1fr 1fr;
          gap: 3rem;
          margin-bottom: 60px;
        }

        .footer-col {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.25rem;
          color: var(--text-primary);
        }

        .brand-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .footer-col-title {
          font-size: 0.9rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-primary);
          border-bottom: 2px solid var(--glass-border);
          padding-bottom: 6px;
          width: fit-content;
        }

        .footer-links-list {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-links-list a {
          color: var(--text-secondary);
          font-size: 0.875rem;
          font-weight: 500;
          transition: var(--transition-fast);
        }

        .footer-links-list a:hover {
          color: var(--accent-blue);
          transform: translateX(2px);
        }

        .contact-item {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .contact-email-link {
          color: var(--accent-blue);
        }

        .font-semi {
          font-weight: 600;
        }

        .newsletter-subtitle {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        /* Subscribe form inside footer */
        .subscribe-form {
          display: flex;
          background: var(--bg-primary);
          border: 1px solid var(--glass-border);
          border-radius: var(--border-radius-sm);
          padding: 4px;
          overflow: hidden;
          width: 100%;
        }

        .subscribe-input {
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-primary);
          padding: 8px 12px;
          font-size: 0.85rem;
          width: 100%;
        }

        .subscribe-btn {
          background: var(--accent-blue);
          color: #ffffff;
          border: none;
          outline: none;
          width: 34px;
          height: 34px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .subscribe-btn:hover {
          background: var(--accent-cyan);
        }

        .subscribe-success {
          font-size: 0.85rem;
          color: #34c759;
          font-weight: 600;
        }

        /* Social links */
        .social-links-container {
          margin-top: 10px;
        }

        .socials-title {
          font-size: 0.8rem;
          margin-bottom: 10px;
          color: var(--text-secondary);
        }

        .social-icons-row {
          display: flex;
          gap: 10px;
        }

        .social-icon-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--bg-primary);
          border: 1px solid var(--glass-border);
          color: var(--text-secondary);
          transition: var(--transition-fast);
        }

        .social-icon-link:hover {
          color: #ffffff;
          transform: translateY(-2px);
        }

        .social-icon-link.inst:hover { background: #e1306c; border-color: transparent; }
        .social-icon-link.yt:hover { background: #ff0000; border-color: transparent; }
        .social-icon-link.tt:hover { background: #000000; border-color: transparent; }

        .tiktok-svg-icon {
          font-size: 1.1rem;
        }

        /* Footer Bottom Bar */
        .footer-bottom-bar {
          border-top: 1px solid var(--glass-border);
          padding: 24px 0;
          background-color: var(--bg-primary);
        }

        .bottom-bar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2.5rem;
          }
        }

        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .bottom-bar-content {
            flex-direction: column;
            gap: 8px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
