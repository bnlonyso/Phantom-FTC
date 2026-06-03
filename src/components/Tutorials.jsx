import React, { useState } from "react";
import { Play, X, Clock, HelpCircle } from "lucide-react";

export default function Tutorials() {
  const [activeVideo, setActiveVideo] = useState(null);

  const learningVideos = [
    {
      id: "video-1",
      title: "Arduino Lesson #0 — What is Arduino, sensor wiring, and power supply",
      category: "Arduino",
      difficulty: "Beginner",
      duration: "10:29",
      description: "Learn the basics of Arduino power and sensor connections for reliable project buildouts.",
      thumbnail: "/images/phantom.png",
      videoUrl: "/videos/video1.mp4"
    },
    {
      id: "video-2",
      title: "Arduino Lesson #1 — Program structure and data types",
      category: "Arduino",
      difficulty: "Beginner",
      duration: "7:26",
      description: "Understand Arduino sketch structure and data types to write clean and correct code.",
      thumbnail: "/images/phantom.png",
      videoUrl: "/videos/video2.mp4"
    },
    {
      id: "video-3",
      title: "Arduino Lesson #1.1 — Working with variables and constants",
      category: "Arduino",
      difficulty: "Beginner",
      duration: "6:33",
      description: "Master Arduino variables and constants for stable program logic and easier debugging.",
      thumbnail: "/images/phantom.png",
      videoUrl: "/videos/video3.mp4"
    }
  ];

  const getCategoryLabel = (cat) => cat;

  return (
    <section id="tutorials" className="tutorials-section">
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-heading reveal">
          <h2 className="section-title">Learning Center</h2>
          <p className="section-subtitle">
            Professional insights from our technical team. Learn coding, mechanics, and design.
          </p>
        </div>

        <div className="learning-videos-list">
          {learningVideos.map((video) => (
            <div key={video.id} className="featured-tutorial-card glass reveal">
              <div className="featured-image-side">
                <img src={video.thumbnail} alt={video.title} className="featured-img" />
                <button 
                  className="play-overlay-btn"
                  onClick={() => setActiveVideo(video)}
                  aria-label="Play Video"
                >
                  <Play size={32} fill="currentColor" />
                </button>
              </div>
              <div className="featured-info-side">
                <div className="featured-tag">Learning Video</div>
                <h3 className="featured-title">{video.title}</h3>
                <p className="featured-desc">{video.description}</p>
                <div className="featured-meta">
                  <span className="meta-badge"><Clock size={14} /> {video.duration}</span>
                  <span className="meta-badge"><HelpCircle size={14} /> {video.difficulty}</span>
                  <span className="meta-badge category">{getCategoryLabel(video.category)}</span>
                </div>
                <button 
                  onClick={() => setActiveVideo(video)} 
                  className="btn-primary featured-play-btn"
                >
                  <Play size={16} fill="currentColor" />
                  <span>Start Watching</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modern Overlay Cinematic Video Player Modal */}
      {activeVideo && (
        <div className="video-player-modal" onClick={() => setActiveVideo(null)}>
          <div className="modal-overlay-bg"></div>
          <div className="modal-content glass" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close-btn"
              onClick={() => setActiveVideo(null)}
              aria-label="Close Video"
            >
              <X size={20} />
            </button>
            
            <div className="video-player-container">
              <video
                src={activeVideo.videoUrl}
                controls
                autoPlay
                playsInline
                className="modal-video-element"
              />
            </div>
            
            <div className="modal-video-info">
              <div className="modal-video-meta">
                <span className="modal-category">{getCategoryLabel(activeVideo.category)}</span>
                <span className="modal-bullet">&bull;</span>
                <span className="modal-difficulty">Difficulty: {activeVideo.difficulty}</span>
              </div>
              <h3 className="modal-video-title">{activeVideo.title}</h3>
              <p className="modal-video-desc">{activeVideo.description}</p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .tutorials-section {
          padding: 100px 0;
          background-color: var(--bg-primary);
        }

        /* Featured Tutorial Card */
        .featured-tutorial-card {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          margin-bottom: 50px;
          box-shadow: var(--glass-shadow);
        }

        .featured-image-side {
          position: relative;
          aspect-ratio: 16/9;
          overflow: hidden;
          background-color: #000;
        }

        .featured-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.85;
          transition: transform 0.5s ease;
        }

        .featured-image-side:hover .featured-img {
          transform: scale(1.02);
          opacity: 0.95;
        }

        .play-overlay-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: rgba(182, 15, 243, 0.9);
          border: none;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 10px 25px rgba(182, 15, 243, 0.4);
          transition: var(--transition-fast);
          padding-left: 6px;
        }

        .play-overlay-btn:hover {
          transform: translate(-50%, -50%) scale(1.1);
          background: var(--accent-gradient);
        }

        .featured-info-side {
          padding: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .featured-tag {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--accent-purple);
          margin-bottom: 1rem;
        }

        .featured-title {
          font-size: 1.85rem;
          margin-bottom: 1rem;
          line-height: 1.25;
        }

        .featured-desc {
          font-size: 0.975rem;
          margin-bottom: 2rem;
        }

        .featured-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 2rem;
        }

        .meta-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--bg-secondary);
          color: var(--text-primary);
          border: 1px solid var(--glass-border);
          padding: 6px 14px;
          border-radius: var(--border-radius-full);
          font-size: 0.75rem;
          font-weight: 500;
        }

        .meta-badge.category {
          background: rgba(182, 15, 243, 0.08);
          color: var(--accent-purple);
          border-color: rgba(182, 15, 243, 0.15);
        }

        .featured-play-btn {
          width: fit-content;
        }

        /* Toolbar Styles */
        .toolbar-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 40px;
        }

        .search-wrapper {
          display: flex;
          align-items: center;
          padding: 10px 18px;
          border-radius: var(--border-radius-md);
          width: 100%;
        }

        .search-icon {
          color: var(--text-secondary);
          margin-right: 12px;
        }

        .search-input {
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-primary);
          font-size: 1rem;
          width: 100%;
        }

        .search-input::placeholder {
          color: var(--text-tertiary);
        }

        .clear-search-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 4px;
        }

        .filter-scroll-wrapper {
          overflow-x: auto;
          white-space: nowrap;
          scrollbar-width: none; /* Firefox */
          margin: 0 -1rem;
          padding: 0 1rem;
        }

        .filter-scroll-wrapper::-webkit-scrollbar {
          display: none; /* Safari & Chrome */
        }

        .category-filters-row {
          display: flex;
          gap: 8px;
        }

        .filter-chip {
          background: var(--bg-secondary);
          border: 1px solid var(--glass-border);
          color: var(--text-secondary);
          padding: 8px 18px;
          border-radius: var(--border-radius-full);
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .filter-chip:hover, .filter-chip.active {
          background: var(--text-primary);
          color: var(--bg-primary);
          border-color: transparent;
        }

        /* Tutorials Grid */
        .tutorials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
        }

        .tutorial-card {
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          transition: var(--transition-smooth);
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .tutorial-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--glass-shadow);
          border-color: var(--accent-purple);
        }

        .tut-thumbnail-wrapper {
          position: relative;
          aspect-ratio: 16/9;
          overflow: hidden;
          background-color: #000;
          cursor: pointer;
        }

        .tut-thumbnail {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .tutorial-card:hover .tut-thumbnail {
          transform: scale(1.03);
        }

        .tut-play-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          opacity: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: var(--transition-fast);
        }

        .tut-thumbnail-wrapper:hover .tut-play-overlay {
          opacity: 1;
        }

        .play-icon-circle {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.95);
          color: #000000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-left: 3px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          transition: transform 0.2s ease;
        }

        .tut-thumbnail-wrapper:hover .play-icon-circle {
          transform: scale(1.1);
        }

        .tut-duration {
          position: absolute;
          bottom: 8px;
          right: 8px;
          background: rgba(0, 0, 0, 0.85);
          color: #ffffff;
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 0.7rem;
          font-weight: 600;
        }

        .tut-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .tut-meta-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }

        .difficulty-badge {
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 2px 8px;
          border-radius: 4px;
          border: 1px solid;
        }

        .difficulty-badge.easy {
          color: #34c759;
          border-color: rgba(52, 199, 89, 0.2);
          background: rgba(52, 199, 89, 0.05);
        }

        .difficulty-badge.medium {
          color: #ff9500;
          border-color: rgba(255, 149, 0, 0.2);
          background: rgba(255, 149, 0, 0.05);
        }

        .difficulty-badge.advanced {
          color: #ff3b30;
          border-color: rgba(255, 59, 48, 0.2);
          background: rgba(255, 59, 48, 0.05);
        }

        .category-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .tut-title {
          font-size: 1.1rem;
          margin-bottom: 10px;
          line-height: 1.35;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .tut-title:hover {
          color: var(--accent-purple);
        }

        .tut-desc {
          font-size: 0.85rem;
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .no-results {
          grid-column: 1 / -1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4rem 2rem;
          text-align: center;
          gap: 12px;
          border-radius: var(--border-radius-lg);
        }

        .no-results h4 {
          font-size: 1.25rem;
        }

        .no-results p {
          font-size: 0.9rem;
          margin-bottom: 12px;
        }

        .btn-sm {
          padding: 8px 20px;
          font-size: 0.85rem;
        }

        /* Video Player Modal */
        .video-player-modal {
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

        .modal-overlay-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(8px);
        }

        .modal-content {
          position: relative;
          z-index: 2001;
          width: 100%;
          max-width: 960px;
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0,0,0,0.8);
          display: flex;
          flex-direction: column;
        }

        .modal-close-btn {
          position: absolute;
          top: 16px;
          right: 16px;
          background: rgba(0, 0, 0, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-fast);
          z-index: 10;
        }

        .modal-close-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.05);
        }

        .video-player-container {
          width: 100%;
          aspect-ratio: 16/9;
          background-color: #000;
        }

        .modal-video-element {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .modal-video-info {
          padding: 2.5rem;
        }

        .modal-video-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--accent-purple);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 8px;
        }

        .modal-video-meta .modal-bullet {
          color: var(--text-tertiary);
        }

        .modal-video-meta .modal-difficulty {
          color: var(--text-secondary);
        }

        .modal-video-title {
          font-size: 1.5rem;
          margin-bottom: 12px;
        }

        .modal-video-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .featured-tutorial-card {
            grid-template-columns: 1fr;
          }
          .featured-info-side {
            padding: 2rem;
          }
        }

        @media (max-width: 640px) {
          .video-player-modal {
            padding: 0;
          }
          .modal-content {
            border-radius: 0;
            height: 100%;
            justify-content: center;
          }
          .modal-video-info {
            padding: 1.5rem;
          }
          .modal-video-title {
            font-size: 1.2rem;
          }
          .modal-close-btn {
            top: 8px;
            right: 8px;
          }
        }
      `}</style>
    </section>
  );
}
