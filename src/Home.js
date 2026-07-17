import React, { useEffect, useRef } from "react";
import ShurikenMark from "./ShurikenMark";
import "./index.css";

const Home = () => {
  const shellRef = useRef(null);

  useEffect(() => {
    const node = shellRef.current;
    if (!node) return;
    const frame = requestAnimationFrame(() => {
      node.classList.add("is-ready");
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="home-shell" ref={shellRef}>
      <div className="home-geometry" aria-hidden="true">
        <svg
          className="home-geo-svg"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="home-fade-h" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#121417" stopOpacity="0" />
              <stop offset="40%" stopColor="#121417" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#121417" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="home-fade-soft" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#121417" stopOpacity="0" />
              <stop offset="50%" stopColor="#121417" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#121417" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Quiet horizon rules */}
          <g className="home-rules">
            <line className="home-rule" x1="720" y1="200" x2="1380" y2="200" />
            <line className="home-rule" x1="720" y1="700" x2="1380" y2="700" />
            <line className="home-rule home-rule--v" x1="1080" y1="120" x2="1080" y2="780" />
          </g>

          {/* Slow-rotating orbital system */}
          <g className="home-orbit-system">
            <circle className="home-orbit home-orbit--a" cx="1080" cy="450" r="140" />
            <circle className="home-orbit home-orbit--b" cx="1080" cy="450" r="230" />
            <circle className="home-orbit home-orbit--c" cx="1080" cy="450" r="330" />
            <line className="home-orbit-arm" x1="1080" y1="450" x2="1080" y2="120" />
            <circle className="home-orbit-dot" cx="1080" cy="120" r="2" />
            <circle className="home-orbit-dot home-orbit-dot--b" cx="1310" cy="450" r="1.6" />
            <circle className="home-orbit-dot home-orbit-dot--c" cx="1080" cy="780" r="1.6" />
          </g>

          {/* One refined sweep */}
          <path
            className="home-sweep"
            stroke="url(#home-fade-h)"
            d="M 680 320 C 860 250, 1000 250, 1140 340 C 1260 410, 1340 400, 1460 330"
          />
          <path
            className="home-sweep home-sweep--soft"
            stroke="url(#home-fade-soft)"
            d="M 700 580 C 880 500, 1040 660, 1200 580 C 1320 520, 1380 540, 1460 600"
          />

          <circle className="home-focus" cx="1080" cy="450" r="2.2" />
        </svg>
      </div>

      <section className="home-hero">
        <div className="home-hero-rail" aria-hidden="true" />
        <div className="home-hero-copy">
          <div className="home-hero-top">
            <p className="home-kicker">Software Engineer</p>
            <span className="home-mark" aria-hidden="true">
              <ShurikenMark />
            </span>
          </div>

          <h1 className="home-name">Anika Mahns</h1>
          <div className="home-name-rule" aria-hidden="true" />

          <p className="home-brown">Brown University 2026 · Computer Science BA</p>
          <p className="home-tagline">Climb hard projects.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
