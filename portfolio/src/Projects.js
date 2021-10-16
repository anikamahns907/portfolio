import React from "react"; //imports react
import fbla from './fblaSC.jpg';
import prqr from './prqrSC.jpg';
import aiface from './aifaceSC.jpg';
import studybot from './studybotSC.jpg';



class Project extends React.Component {
  state = { popUpActive: false, firstDescription: false, secondDescription: false }

  render() {
    return (
      //created a center div for introduction
      <div className="mainDiv">
        <div
          className="projectPopUps"
          style={{
            opacity: this.state.popUpActive ? 1 : 0,
            visibility: this.state.popUpActive ? "visible" : "hidden",
          }}
        >
          <div className="popupWhiteSquare">

            <div className="xDiv">
              <span
                onClick={() => this.setState({ popUpActive: false, firstDescription: false, secondDescription: false, thirdDescription: false, fourthDescription: false })}
                className="hoverGeneral xText"
              >
                X
              </span>
            </div>

            <div className="popUpContent" style={{ display: this.state.firstDescription ? 'block' : 'none', opacity: this.state.firstDescription ? 1 : 0, visibility: this.state.firstDescription ? "visible" : "hidden" }}>
              <h4>FBLA QUIZ</h4>
              <i>FBLA Quiz is an interactive user interface that enables users to advance their knowledge about FBLA through the completion of a 5 question quiz. The five questions are randomly generated from a NoSQL database obtaining fifty collections. Once all required fields are filled, the user can submit the quiz, and a report page will display indicating a score, time, and all five questions answered along with the user’s answers and the correct answer choices. The user is able to customize and analyze their reports through report settings that allows users to toggle question type, enter their name, and print their reports. </i>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <a href="https://fbla-quiz.netlify.app/" target="_blank" rel="noreferrer" > GO TO FBLA QUIZ </a>
            </div>
            <div className="popUpContent" style={{ display: this.state.secondDescription ? 'block' : 'none', opacity: this.state.secondDescription ? 1 : 0, visibility: this.state.secondDescription ? "visible" : "hidden" }}>
              <h4>PRQR</h4>
              <i>PRQR site is still in construction. This sight will capture the surreal Puerto Rican reality through different lenses.</i>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <a href="https://github.com/anikamahns907/prqr-gallery" target="_blank" rel="noreferrer"  > GO TO PRQR </a>
            </div>
            <div className="popUpContent" style={{ display: this.state.thirdDescription ? 'block' : 'none', opacity: this.state.thirdDescription ? 1 : 0, visibility: this.state.thirdDescription ? "visible" : "hidden" }}>
              <h4>OBAMA SAID</h4>
              <i>A Python bot that webscrapes Obama's words and likes all his posts on Instagram</i>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <a href="https://github.com/anikamahns907/Obama-Said..." target="_blank" rel="noreferrer"  > GO TO OBAMA SAID </a>
            </div>
            <div className="popUpContent" style={{ display: this.state.fourthDescription ? 'block' : 'none', opacity: this.state.fourthDescription ? 1 : 0, visibility: this.state.fourthDescription ? "visible" : "hidden" }}>
              <h4>STUDY BOT</h4>
              <i>Study bot takes various study qoutes and sends a daily question to my phone. I implemented this bot to study for my AP government test. </i>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <a href="https://github.com/anikamahns907/APgov-SMSbot" target="_blank" rel="noreferrer"  > GO TO STUDY BOT </a>
            </div>
          </div>
        </div>

        <div className="mainMarginDiv">

          <div className="projectGrid">
            <img src={fbla} className="projectImg hoverGeneral" onClick={() => this.setState({ popUpActive: true, firstDescription: true })} alt="fbla "></img>
            <img src={prqr} className="projectImg hoverGeneral" onClick={() => this.setState({ popUpActive: true, secondDescription: true })} alt="prqr "></img>
            <img src={aiface} className="projectImg hoverGeneral" onClick={() => this.setState({ popUpActive: true, thirdDescription: true })} alt="ai face "></img>
            <img src={studybot} className="projectImg hoverGeneral" onClick={() => this.setState({ popUpActive: true, fourthDescription: true })} alt="study bot "></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
