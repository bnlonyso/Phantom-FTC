import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Robots", href: "#projects" },
    { label: "Tutorials", href: "#tutorials" },
    { label: "Comics", href: "#comics" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <>
      <nav className="navbar-container glass">
        <div className="navbar-content">
          <div className="nav-logo">
            <a href="#home" className="logo-link">
              <img src="/images/phantom.png" alt="Phantom Logo" className="logo-image" />
              <span className="logo-text">PHANTOM<span className="team-num">33830</span></span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="nav-links-desktop">
            {navLinks.map((link, idx) => (
              <a key={idx} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <button 
              onClick={toggleTheme} 
              className="theme-toggle" 
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun size={20} className="text-sun" />
              ) : (
                <Moon size={20} className="text-moon" />
              )}
            </button>

            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="mobile-menu-btn"
              aria-label="Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div className={`mobile-drawer glass ${isOpen ? "open" : ""}`}>
        <div className="drawer-links">
          {navLinks.map((link, idx) => (
            <a 
              key={idx} 
              href={link.href} 
              className="drawer-link"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .navbar-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 64px;
          z-index: 1000;
          display: flex;
          align-items: center;
          border-bottom: 1px solid var(--glass-border);
        }

        .navbar-content {
          width: 100%;
          max-width: var(--max-width);
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo .logo-link {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-primary);
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.25rem;
          letter-spacing: -0.03em;
        }

        .logo-image {
          height: 40px;
          width: auto;
          object-fit: contain;
          animation: pulse-slow 3s infinite alternate;
        }

        .logo-icon {
          color: var(--accent-purple);
          animation: pulse-slow 3s infinite alternate;
        }

        .team-num {
          font-size: 0.75rem;
          font-weight: 500;
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-left: 4px;
          border: 1px solid var(--accent-cyan);
          padding: 2px 6px;
          border-radius: 4px;
        }

        .nav-links-desktop {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
          transition: var(--transition-fast);
        }

        .nav-link:hover {
          color: var(--text-primary);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .mobile-menu-btn {
          display: none;
          background: transparent;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
        }

        /* Mobile Drawer */
        .mobile-drawer {
          position: fixed;
          top: 64px;
          left: 0;
          width: 100%;
          height: calc(100vh - 64px);
          z-index: 999;
          transform: translateY(-100%);
          opacity: 0;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          pointer-events: none;
        }

        .mobile-drawer.open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: all;
        }

        .drawer-links {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          align-items: center;
        }

        .drawer-link {
          font-family: var(--font-heading);
          font-size: 1.75rem;
          font-weight: 600;
          color: var(--text-primary);
          transition: var(--transition-fast);
        }

        .drawer-link:hover {
          color: var(--accent-purple);
          transform: scale(1.05);
        }

        @keyframes pulse-slow {
          0% { transform: scale(1); filter: drop-shadow(0 0 2px rgba(182, 15, 243, 0.2)); }
          100% { transform: scale(1.05); filter: drop-shadow(0 0 8px rgba(182, 15, 243, 0.6)); }
        }

        @media (max-width: 768px) {
          .nav-links-desktop {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
          .navbar-content {
            padding: 0 1.25rem;
          }
        }
      `}</style>
    </>
  );
}
