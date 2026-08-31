'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // Ensure playback begins on load
    const video = videoRef.current;
    if (video) {
      if (video.readyState >= 3) {
        setIsVideoLoaded(true);
      }
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          video.muted = true;
          video.play();
        });
      }
    }
  }, []);

  const toggleSound = () => {
    const video = videoRef.current;
    if (video) {
      const nextMuted = !video.muted;
      video.muted = nextMuted;
      if (!nextMuted) {
        video.volume = 1.0;
        video.play();
      }
      setIsMuted(nextMuted);
    }
  };

  return (
    <>
      {/* Ambient Glowing Backgrounds */}
      <div className="ambient-glow glow-1" />
      <div className="ambient-glow glow-2" />
      <div className="ambient-glow glow-3" />

      {/* Gorgeous Left-to-Right Glowing Ambient Light Ray Sweep */}
      <div className="light-sweep-container">
        <div className="light-sweep-beam" />
      </div>

      {/* Centered Logo Navbar (Seamless body background match) */}
      <header className="navbar">
        <div className="nav-logo-wrapper">
          <Image
            src="/files/logo.jpeg"
            alt="Aesthetic Venture Logo"
            width={180}
            height={46}
            priority
            className="logo-img"
          />
        </div>
      </header>

      {/* 1. Full-Width Video Showcase (Right after Nav) with Glowing Beam Line */}
      <section className="video-fullwidth-section">
        <div className="glowing-beam-line" />
        <div className="video-container">
          {/* Skeleton Loader while video is buffering/loading */}
          {!isVideoLoaded && (
            <div className="video-skeleton">
              <div className="video-skeleton-shimmer" />
              <div className="skeleton-content">
                <div className="skeleton-spinner">
                  <div className="spinner-ring" />
                  <div className="spinner-center-dot" />
                </div>
                <div className="skeleton-text">
                  <span className="pulse-dot" />
                  <span>Loading Visuals...</span>
                </div>
              </div>
            </div>
          )}

          <video
            ref={videoRef}
            autoPlay
            loop
            playsInline
            muted
            preload="auto"
            onLoadedData={() => setIsVideoLoaded(true)}
            onCanPlay={() => setIsVideoLoaded(true)}
            style={{
              opacity: isVideoLoaded ? 1 : 0,
            }}
          >
            <source src="/files/Cover1.mp4" type="video/mp4" />
            <source src="/files/Cover.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Quick Sound Toggle Button */}
          <button
            type="button"
            onClick={toggleSound}
            className="sound-overlay-btn"
            title="Toggle Audio"
            style={{
              opacity: isVideoLoaded ? 1 : 0,
              pointerEvents: isVideoLoaded ? 'auto' : 'none',
              background: isMuted ? 'rgba(14, 24, 28, 0.78)' : 'rgba(42, 123, 140, 0.88)',
              borderColor: isMuted ? 'rgba(42, 123, 140, 0.5)' : '#5ed2ea',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMuted ? (
                <>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                  />
                </>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
              )}
            </svg>
            <span>{isMuted ? 'Click to Unmute' : 'Sound On'}</span>
          </button>
        </div>
        <div className="glowing-beam-line" />
      </section>

      {/* 2. Content Section (Texts & Info Cards after Video) */}
      <main className="content-container">
        {/* Header / Coming Soon Texts with Left-to-Right Shimmer */}
        <div className="header-section">
          <div className="coming-soon-badge">
            <span className="pulse-dot" />
            <span>Coming Soon</span>
          </div>
          <h1 className="hero-title">Aesthetic Venture</h1>
          <div className="hero-tagline">Commit to Serve</div>
          <p className="hero-subtitle">
            Something visionary is taking shape. We are crafting exceptional spaces and
            timeless architectural experiences.
          </p>
        </div>

        {/* Glassmorphism Info Card Container with Left-to-Right Glowing Edge */}
        <section className="info-card-container">
          <div className="glass-card">
            {/* Location Info */}
            <div className="info-item">
              <div className="icon-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="info-content">
                <span className="info-label">Our Location</span>
                <p className="info-value">
                  Plot-33, Kallayanpur Main Road.
                  <br />
                  Mirpur, Dhaka -1207.
                </p>
              </div>
            </div>

            {/* Email Info */}
            <div className="info-item">
              <div className="icon-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="info-content">
                <span className="info-label">Direct Inquiries</span>
                <p className="info-value">
                  <a href="mailto:Info@aestheticventurebd.com">
                    Info@aestheticventurebd.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Aesthetic Venture. All rights reserved.</p>
      </footer>
    </>
  );
}
