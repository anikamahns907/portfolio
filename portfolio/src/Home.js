import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import "./index.css";

const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="mainDiv">
      <Particles
        className="particles"
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "#ffffff" } },
          particles: {
            color: { value: "#0070f3" },
            links: {
              color: "#0070f3",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: { enable: true, speed: 1 },
            size: { value: 1 },
            number: { density: { enable: true, area: 800 }, value: 50 },
          },
        }}
      />

      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="name">Anika Mahns</h1>
            <h2 className="subtitle">Software Engineer</h2>
            <p className="hero-description">
              Building innovative solutions that bridge technology and human experience. 
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
