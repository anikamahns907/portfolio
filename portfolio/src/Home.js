import React, { useCallback } from "react";
import myFaceImage from './faceme.JPG';
import './index.css';
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className="mainDiv">
      <Particles
        className="particles"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "white",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 190,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#000000", // Set particles color to black
            },
            links: {
              color: "#000000", // Set link color to black
              distance: 200,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              value: 100,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 0.5, max: 2 }, // Smaller particle size
            },
          },
          detectRetina: true,
        }}
        style={{
          position: "fixed",
          zIndex: -1,
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <div className="content" style={{ position: "relative", zIndex: 1 }}>
        <p className="name">Anika Mahns</p>
        <img src={myFaceImage} alt="My Face" className="my-face-image" />
        <p>
          This portfolio showcases my journey and the projects I've crafted through my passion for coding and technology. Having lived in diverse cultures, I’ve learned invaluable lessons in empathy and adaptability. As a ScB candidate in Applied Mathematics-Computer Science at Brown, I’m dedicated to innovation and problem-solving.
        </p>
        <p>
          Built with React.js and JavaScript, this portfolio reflects my blend of coding expertise and creativity. From an AWS-powered quiz platform to exploring Chaos Theory, I illuminate the intersection of creativity and computer science.
        </p>
        <p>
          Beyond coding, I enjoy strength training, café hopping, music, biking, and nature. I also express my creativity through video edits, origami, and art. As a facilitator of the Brown Meditation Community, I find peace in mindfulness and love sharing it with others.
        </p>
        <p>
          Feel free to explore my portfolio and see how coding, innovation, and personal growth intersect across different facets of my life.
        </p>
      </div>
    </div>
  );
};

export default Home;
