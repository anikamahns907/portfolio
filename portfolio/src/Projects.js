import React from "react"; //imports react
import chaos from './chaos.jpg';

class Project extends React.Component {
  render() {
    return (
      //created a center div for introduction
      <div className="mainDiv">
        <div className="mainMarginDiv">
          <i className="introText">
            Hi my name is Anika Mahns
          </i>
          <div className="projectGrid">
            <img src={chaos} className="projectImg" alt="chaospic"></img>
            <img src={chaos} className="projectImg" alt="chaospic"></img>
            <img src={chaos} className="projectImg" alt="chaospic"></img>
            <img src={chaos} className="projectImg" alt="chaospic"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
