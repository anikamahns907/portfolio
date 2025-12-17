import React from "react";
import fbla from "./fblaSC.jpg";
import prqr from "./prqrSC.jpg";
import aiface from "./aifaceSC.jpg";
import studybot from "./studybotSC.jpg";
import "./index.css";

class Project extends React.Component {
  state = { activePopup: null };

  render() {
    const projectDescriptions = [
      { title: "FBLA Quiz", img: fbla, link: "https://fbla-quiz.netlify.app/" },
      { title: "PRQR", img: prqr, link: "https://github.com/anikamahns907/prqr-gallery" },
      { title: "AI Face Generator", img: aiface, link: "https://colab.research.google.com/drive/1Imh6NHq8ELFB8i_uqTFc24Ugab8dFOTT" },
      { title: "Study Bot", img: studybot, link: "https://github.com/anikamahns907/APgov-SMSbot" },
    ];

    return (
      <div className="mainDiv">
        <div className="projectGrid">
          {projectDescriptions.map((project, index) => (
            <div
              key={index}
              className="projectCard"
              onClick={() => this.setState({ activePopup: index })}
            >
              <img
                src={project.img}
                className="projectImg"
                alt={project.title}
              />
              <h4 className="projectTitle">{project.title}</h4>
            </div>
          ))}
        </div>

        {this.state.activePopup !== null && (
          <div
            className="projectPopUps active"
            onClick={() => this.setState({ activePopup: null })}
          >
            <div className="popupWhiteSquare" onClick={(e) => e.stopPropagation()}>
              <span
                className="xText"
                onClick={() => this.setState({ activePopup: null })}
              >
                X
              </span>
              <h4>{projectDescriptions[this.state.activePopup].title}</h4>
              <a
                href={projectDescriptions[this.state.activePopup].link}
                target="_blank"
                rel="noreferrer"
              >
                Visit Project
              </a>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Project;
