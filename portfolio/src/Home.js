import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import myFaceImage from "./faceme.JPG"; // Update the path if needed
import "./index.css";

const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // Load particles-slim for better performance
  }, []);

  return (
    <div className="mainDiv">
      {/* Particles Background */}
      <Particles
        className="particles"
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "#fdfdfd" } }, // Light background
          particles: {
            color: { value: "#0070f3" }, // Blue particles
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

      {/* Main Content */}
      <div className="content">
        <p className="name">Anika Mahns</p>
        <img src={myFaceImage} alt="Anika Mahns" className="my-face-image" />
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
