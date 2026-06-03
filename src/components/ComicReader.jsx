import React, { useState } from "react";
import { comicData } from "../data/comicData";
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut, Layers } from "lucide-react";

export default function ComicReader() {
  const [selectedComic, setSelectedComic] = useState(null);
  const [currentPageIdx, setCurrentPageIdx] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const openReader = (comic) => {
    setSelectedComic(comic);
    setCurrentPageIdx(0);
    setIsZoomed(false);
  };

  const closeReader = () => {
    setSelectedComic(null);
  };

  const nextPage = () => {
    if (!selectedComic) return;
    if (currentPageIdx < selectedComic.pages.length - 1) {
      setCurrentPageIdx(currentPageIdx + 1);
    }
  };

  const prevPage = () => {
    if (!selectedComic) return;
    if (currentPageIdx > 0) {
      setCurrentPageIdx(currentPageIdx - 1);
    }
  };

  return (
    <section id="comics" className="comics-section">
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-heading reveal">
          <h2 className="section-title">Phantom Webcomics</h2>
          <p className="section-subtitle">
            Original illustrated narratives mapping team workflows, funny code bugs, and on-field strategies.
          </p>
        </div>

        {/* Comic Catalog Grid */}
        <div className="comics-grid">
          {comicData.map((comic) => (
            <div key={comic.id} className="comic-card glass reveal" onClick={() => openReader(comic)}>
              <div className="comic-cover-wrapper">
                <img 
                  src={comic.cover} 
                  alt={comic.title} 
                  className="comic-cover-img" 
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80"; // fallback
                  }}
                />
                <div className="comic-hover-overlay">
                  <div className="read-badge">
                    <Layers size={18} />
                    <span>Read Comic</span>
                  </div>
                </div>
              </div>
              <div className="comic-info">
                <span className="comic-category">{comic.category}</span>
                <h3 className="comic-title">{comic.title}</h3>
                <p className="comic-desc">{comic.description}</p>
                <div className="comic-footer">
                  <span className="comic-tag">#{comic.tag}</span>
                  <span className="comic-pages-lbl">{comic.pagesCount} pgs.</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Fullscreen Comic Reader Mode */}
      {selectedComic && (
        <div className="comic-reader-modal">
          <div className="reader-backdrop" onClick={closeReader}></div>
          
          <div className="reader-content glass">
            {/* Top Bar Controls */}
            <div className="reader-header">
              <div className="reader-title-info">
                <span className="reader-sub">{selectedComic.category}</span>
                <h3 className="reader-title">{selectedComic.title}</h3>
              </div>
              
              <div className="reader-actions">
                <button 
                  onClick={() => setIsZoomed(!isZoomed)} 
                  className="reader-btn" 
                  title={isZoomed ? "Zoom Out" : "Zoom In"}
                >
                  {isZoomed ? <ZoomOut size={18} /> : <ZoomIn size={18} />}
                </button>
                <button onClick={closeReader} className="reader-btn close" title="Close Reader">
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Main Stage Panel */}
            <div className="reader-stage">
              <button 
                onClick={prevPage} 
                className={`stage-nav-btn prev ${currentPageIdx === 0 ? "disabled" : ""}`}
                disabled={currentPageIdx === 0}
                aria-label="Previous Page"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="comic-page-display-wrapper">
                <div className={`comic-image-container ${isZoomed ? "zoomed" : ""}`}>
                  <img 
                    src={selectedComic.pages[currentPageIdx].image} 
                    alt={`Page ${currentPageIdx + 1}`} 
                    className="comic-page-img"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"; // fallback
                    }}
                  />
                </div>
              </div>

              <button 
                onClick={nextPage} 
                className={`stage-nav-btn next ${currentPageIdx === selectedComic.pages.length - 1 ? "disabled" : ""}`}
                disabled={currentPageIdx === selectedComic.pages.length - 1}
                aria-label="Next Page"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Story Dialog Caption */}
            <div className="reader-caption-container">
              <p className="reader-caption-text">
                {selectedComic.pages[currentPageIdx].caption}
              </p>
            </div>

            {/* Bottom Progress Navigation */}
            <div className="reader-footer-nav">
              <div className="progress-bars-container">
                {selectedComic.pages.map((_, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setCurrentPageIdx(idx)}
                    className={`progress-segment ${idx === currentPageIdx ? "active" : ""} ${idx < currentPageIdx ? "visited" : ""}`}
                    title={`Page ${idx + 1}`}
                  ></div>
                ))}
              </div>
              <div className="page-indicator">
                Page {currentPageIdx + 1} of {selectedComic.pages.length}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .comics-section {
          padding: 100px 0;
          background-color: var(--bg-primary);
        }

        .comics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 2.5rem;
        }

        .comic-card {
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          cursor: pointer;
          transition: var(--transition-smooth);
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .comic-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--glass-shadow);
          border-color: var(--accent-purple);
        }

        .comic-cover-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 1.35;
          overflow: hidden;
          background-color: #000;
          border-bottom: 1px solid var(--glass-border);
        }

        .comic-cover-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .comic-card:hover .comic-cover-img {
          transform: scale(1.04);
        }

        .comic-hover-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.45);
          opacity: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: var(--transition-fast);
        }

        .comic-card:hover .comic-hover-overlay {
          opacity: 1;
        }

        .read-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          color: #000000;
          padding: 8px 18px;
          border-radius: var(--border-radius-full);
          font-size: 0.85rem;
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .comic-info {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .comic-category {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--accent-cyan);
          margin-bottom: 8px;
        }

        .comic-title {
          font-size: 1.25rem;
          margin-bottom: 10px;
          line-height: 1.3;
        }

        .comic-desc {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .comic-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid var(--glass-border);
          padding-top: 12px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .comic-tag {
          color: var(--accent-purple);
        }

        .comic-pages-lbl {
          color: var(--text-secondary);
        }

        /* Comic Reader Modal */
        .comic-reader-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .reader-backdrop {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(10px);
        }

        .reader-content {
          position: relative;
          z-index: 2001;
          width: 100%;
          max-width: 900px;
          height: 90vh;
          border-radius: var(--border-radius-lg);
          display: flex;
          flex-direction: column;
          box-shadow: 0 30px 70px rgba(0,0,0,0.8);
          overflow: hidden;
        }

        .reader-header {
          padding: 1.25rem 2rem;
          border-bottom: 1px solid var(--glass-border);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .reader-title-info {
          display: flex;
          flex-direction: column;
        }

        .reader-sub {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--accent-cyan);
          text-transform: uppercase;
        }

        .reader-title {
          font-size: 1.25rem;
          line-height: 1.2;
        }

        .reader-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .reader-btn {
          background: var(--bg-secondary);
          border: 1px solid var(--glass-border);
          color: var(--text-primary);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .reader-btn:hover {
          background: var(--glass-border);
          color: var(--accent-purple);
        }

        .reader-btn.close:hover {
          color: #ff3b30;
        }

        /* Reader Stage Panel */
        .reader-stage {
          flex-grow: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem;
          background: rgba(0, 0, 0, 0.4);
          overflow: hidden;
        }

        .stage-nav-btn {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #ffffff;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-fast);
          z-index: 5;
        }

        .stage-nav-btn:hover:not(.disabled) {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.05);
        }

        .stage-nav-btn.disabled {
          opacity: 0.2;
          cursor: not-allowed;
        }

        .comic-page-display-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          width: calc(100% - 120px);
          height: 100%;
          overflow: auto;
          scrollbar-width: none;
        }

        .comic-page-display-wrapper::-webkit-scrollbar {
          display: none;
        }

        .comic-image-container {
          max-width: 100%;
          max-height: 100%;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .comic-image-container.zoomed {
          transform: scale(1.5);
          cursor: zoom-out;
        }

        .comic-page-img {
          max-width: 100%;
          max-height: 50vh;
          object-fit: contain;
          border-radius: 6px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        /* Story Caption */
        .reader-caption-container {
          padding: 1.5rem 2rem;
          background: var(--bg-secondary);
          border-top: 1px solid var(--glass-border);
          border-bottom: 1px solid var(--glass-border);
        }

        .reader-caption-text {
          font-size: 1rem;
          color: var(--text-primary);
          line-height: 1.5;
          text-align: center;
          font-style: italic;
        }

        /* Reader Footer progress */
        .reader-footer-nav {
          padding: 1.25rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: center;
        }

        .progress-bars-container {
          display: flex;
          gap: 6px;
          width: 100%;
          max-width: 400px;
        }

        .progress-segment {
          flex-grow: 1;
          height: 4px;
          background: var(--glass-border);
          border-radius: 2px;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .progress-segment.active {
          background: var(--accent-cyan);
          box-shadow: 0 0 6px var(--accent-cyan);
        }

        .progress-segment.visited {
          background: var(--accent-purple);
        }

        .page-indicator {
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .comic-reader-modal {
            padding: 0;
          }
          .reader-content {
            border-radius: 0;
            height: 100vh;
          }
          .comic-page-display-wrapper {
            width: 100%;
          }
          .stage-nav-btn {
            position: absolute;
            background: rgba(0,0,0,0.5);
            width: 40px;
            height: 40px;
          }
          .stage-nav-btn.prev { left: 10px; }
          .stage-nav-btn.next { right: 10px; }
          .comic-page-img {
            max-height: 40vh;
          }
        }
      `}</style>
    </section>
  );
}
