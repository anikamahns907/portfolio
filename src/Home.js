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
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            className="home-float-line home-float-line--a"
            d="M -40 180 C 180 80, 360 280, 560 160 S 920 60, 1240 200"
          />
          <path
            className="home-float-line home-float-line--b"
            d="M -20 360 C 220 260, 400 460, 640 340 S 980 240, 1260 380"
          />
          <path
            className="home-float-line home-float-line--c"
            d="M -60 540 C 160 440, 380 640, 620 520 S 940 420, 1280 560"
          />
          <path
            className="home-float-line home-float-line--d"
            d="M 80 -20 C 200 140, 120 320, 280 480 S 420 700, 560 820"
          />
          <path
            className="home-float-line home-float-line--e"
            d="M 980 -40 C 1080 120, 1020 300, 1140 460 S 1180 680, 1220 840"
          />
        </svg>
      </div>

      <section className="home-hero">
        <div className="home-hero-top">
          <p className="home-kicker">Software Engineer</p>
          <span className="home-mark" aria-hidden="true">
            <ShurikenMark />
          </span>
        </div>

        <h1 className="home-name">Anika Mahns</h1>

        <p className="home-line">
          Brown CS. I build software, climb hard problems, and keep moving.
        </p>
      </section>
    </div>
  );
};

export default Home;
