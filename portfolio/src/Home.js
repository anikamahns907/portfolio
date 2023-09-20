import React from "react";
import myFaceImage from './faceme.JPG';
import './index.css';

class Home extends React.Component {
  render() {
    return (
        <div className="mainDiv">
        <div className="content">
        <p className="name">Anika Mahns</p>

          <img src={myFaceImage} alt="My Face" className="my-face-image" />

  <p>
    This portfolio offers a glimpse into my journey, experiences, and the exciting projects I've crafted through my love for coding and technology.
  </p>
  <p>
    Having traversed the globe and embraced diverse cultures, I've broadened my horizons and learned invaluable lessons in empathy, adaptability, and understanding. Currently pursuing a ScB in Applied Mathematics-Computer Science at Brown University, I'm dedicated to pushing the boundaries of innovation and problem-solving.
  </p>
  <p>
    This very portfolio you're exploring was crafted through my knowledge of React.js and JavaScript. I've blended my coding experience with creativity to design a platform that showcases my perspective and achievements. From a quiz platform powered by AWS and MongoDB to exploring Chaos Theory's mathematical applications, I illuminate the intersection of creativity and computer science.
  </p>
  <p>
    Outside of the world of coding, I find joy in various activities. I indulge in strength training to challenge my physical limits, hop between cafes to savor unique experiences, and immerse myself in the world of music that fuels my creativity. Biking down East Bay Bike Path and exploring nature help me find tranquility and inspiration.
  </p>
  <p>
    I channel my creative energy into crafting video edits, expressing myself through origami and drawing, and appreciating the intricate beauty of art. Spending quality time with people and fostering meaningful connections is a cornerstone of my life.
  </p>
  <p>
    As a facilitator of the Brown Meditation Community, I find solace in mindfulness and share the practice with others. And yes, I'm an enthusiastic lover of synergy golden pineapple kombucha, which perfectly complements my zest for life. I invite you to explore my portfolio and join me in celebrating the harmony of coding, innovation, and personal growth across various facets of my life.
  </p>
  <p>
    I have created this portfolio using Javascript (React.js), Cloudinary, and Netlify
    (see the code here:{" "}
    
    <a
      href="https://github.com/anikamahns907"
      target="_blank"
      className="hoverGeneral"
      rel="noreferrer"
    >
      GitHub
    </a>
    ). 
  </p>
</div>

      </div>

    );
  }
}

export default Home;
