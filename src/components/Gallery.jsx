import React, { useState } from "react";
import { Maximize2, Play, X } from "lucide-react";

export default function Gallery() {
  const [activeMedia, setActiveMedia] = useState(null);

  const galleryItems = [
    {
      id: "item1",
      type: "video",
      url: "/images/video_trk2026.mp4",
      caption: "Ontystik Championship"
    },
    {
      id: "item2",
      type: "image",
      url: "/images/team_01.jpg",
      caption: "Team portrait captured on the scene."
    },
    {
      id: "item3",
      type: "video",
      url: "/images/video_trk2026_happy.mp4",
      caption: "The team's celebration immediately following the announcement of our win."
    },
    {
      id: "item4",
      type: "image",
      url: "/images/team_02.jpg",
      caption: "The group photo with our teammate after the last game."
    },
    {
      id: "item5",
      type: "video",
      url: "/images/video_almaty2025.mp4",
      caption: "Our first experience recorded during Almaty Regionals."
    },
    {
      id: "item6",
      type: "image",
      url: "/images/team_03.jpg",
      caption: "Our first WAP nomination."
    }
  ];

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-heading reveal">
          <h2 className="section-title">Media Gallery</h2>
          <p className="section-subtitle">
            Moments of victory, intense assembly work in the workshop, and the raw energy of FIRST Tech Challenge arenas.
          </p>
        </div>

        {/* Masonry Layout Grid */}
        <div className="masonry-grid">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className={`gallery-card glass reveal ${item.type === "video" ? "has-video" : ""}`}
              onClick={() => setActiveMedia(item)}
            >
              <div className="media-wrapper">
                {item.type === "video" ? (
                  <div className="video-card-container">
                    <video 
                      src={item.url} 
                      muted 
                      loop 
                      autoPlay 
                      playsInline
                      className="gallery-video"
                    />
                    <div className="video-badge-tag">
                      <Play size={10} fill="currentColor" />
                      <span>Video</span>
                    </div>
                  </div>
                ) : (
                  <img src={item.url} alt={item.caption} className="gallery-img" />
                )}
                
                <div className="media-hover-overlay">
                  <div className="hover-actions">
                    <Maximize2 size={20} className="hover-action-icon" />
                  </div>
                  <p className="hover-caption">{item.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Lightbox Zoom Mode */}
      {activeMedia && (
        <div className="lightbox-modal" onClick={() => setActiveMedia(null)}>
          <div className="lightbox-backdrop"></div>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="lightbox-close-btn"
              onClick={() => setActiveMedia(null)}
              aria-label="Close Lightbox"
            >
              <X size={20} />
            </button>

            <div className="lightbox-media-container">
              {activeMedia.type === "video" ? (
                <video src={activeMedia.url} controls autoPlay loop className="lightbox-video-el" />
              ) : (
                <img src={activeMedia.url} alt={activeMedia.caption} className="lightbox-img-el" />
              )}
            </div>

            <div className="lightbox-caption-container">
              <p className="lightbox-caption-text">{activeMedia.caption}</p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .gallery-section {
          padding: 100px 0;
          background-color: var(--bg-secondary);
          overflow: hidden;
          position: relative;
          z-index: 1;
        }

        /* Masonry Grid Layout */
        .masonry-grid {
          column-count: 3;
          column-gap: 1.5rem;
          width: 100%;
        }

        .gallery-card {
          break-inside: avoid;
          margin-bottom: 1.5rem;
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          cursor: pointer;
          transition: var(--transition-smooth);
          border: 1px solid var(--glass-border);
          box-shadow: var(--card-shadow);
        }

        .gallery-card:hover {
          transform: scale(1.02);
          box-shadow: var(--glass-shadow);
          border-color: var(--accent-cyan);
        }

        .media-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .gallery-img {
          width: 100%;
          display: block;
          height: auto;
          object-fit: cover;
          border-radius: 4px;
        }

        .video-card-container {
          position: relative;
          width: 100%;
          background-color: #000000;
        }

        .gallery-video {
          width: 100%;
          display: block;
          object-fit: cover;
          max-height: 500px;
          opacity: 0.9;
        }

        .video-badge-tag {
          position: absolute;
          top: 12px;
          left: 12px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(182, 15, 243, 0.95);
          color: #ffffff;
          padding: 4px 10px;
          border-radius: var(--border-radius-full);
          font-size: 0.7rem;
          font-weight: 600;
        }

        .media-hover-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.1) 80%);
          opacity: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 1.5rem;
          transition: var(--transition-fast);
        }

        .gallery-card:hover .media-hover-overlay {
          opacity: 1;
        }

        .hover-actions {
          position: absolute;
          top: 15px;
          right: 15px;
          background: rgba(182, 15, 243, 0.8);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          transition: var(--transition-fast);
        }

        .gallery-card:hover .hover-actions {
          transform: rotate(90deg);
        }

        .hover-action-icon {
          color: #ffffff;
        }

        .hover-caption {
          color: #ffffff;
          font-size: 0.85rem;
          line-height: 1.4;
          font-weight: 500;
        }

        /* Lightbox modal styling */
        .lightbox-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2100;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 2rem;
        }

        .lightbox-backdrop {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.95);
        }

        .lightbox-content {
          position: relative;
          z-index: 2101;
          max-width: 900px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .lightbox-close-btn {
          position: absolute;
          top: -50px;
          right: 0;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .lightbox-close-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.05);
        }

        .lightbox-media-container {
          width: 100%;
          max-height: 70vh;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          background: #000;
          border-radius: var(--border-radius-lg);
          box-shadow: 0 20px 50px rgba(0,0,0,0.6);
        }

        .lightbox-video-el, .lightbox-img-el {
          max-width: 100%;
          max-height: 70vh;
          object-fit: contain;
        }

        .lightbox-caption-container {
          padding: 1.5rem 0;
          text-align: center;
          width: 100%;
        }

        .lightbox-caption-text {
          font-size: 1rem;
          color: #ffffff;
          max-width: 600px;
          margin: 0 auto;
        }

        @media (max-width: 1024px) {
          .masonry-grid {
            column-count: 2;
          }
        }

        @media (max-width: 640px) {
          .masonry-grid {
            column-count: 1;
          }
          .lightbox-modal {
            padding: 1rem;
          }
          .lightbox-close-btn {
            top: 10px;
            right: 10px;
            background: rgba(0,0,0,0.5);
          }
        }
      `}</style>
    </section>
  );
}
