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
              <br/><br/><br/><br/>
              <a href="https://fbla-quiz.netlify.app/" target="_blank" className = "hoverGeneral" rel="noreferrer" > GO TO FBLA QUIZ </a>
            </div>
            <div className="popUpContent" style={{ display: this.state.secondDescription ? 'block' : 'none', opacity: this.state.secondDescription ? 1 : 0, visibility: this.state.secondDescription ? "visible" : "hidden" }}>
              <h4>PRQR</h4>
              <i>PRQR is still in construction. This website allows those around Puerto Rico to scan a qr code sticker and upload images they've taken at that location to that location’s specific PRQR page. This allows users to share their unique perspectives of the beautiful island of Puerto Rico. I built this with a React.Js frontend (JavaScript, HTML/CSS) hosted on Netlify and used the Cloudinary CDN as a backend to save and display photos. I am working on deploying QR codes to some of my favorite locations around Puerto Rico and hope to add a GAN backend that will generate landscapes from the images uploaded.</i>
              <br/><br/><br/><br/>
              <a href="https://github.com/anikamahns907/prqr-gallery" target="_blank" className = "hoverGeneral" rel="noreferrer"  > GO TO PRQR </a>
            </div>
            <div className="popUpContent" style={{ display: this.state.thirdDescription ? 'block' : 'none', opacity: this.state.thirdDescription ? 1 : 0, visibility: this.state.thirdDescription ? "visible" : "hidden" }}>
              <h4>AI FACE GENERATOR</h4>
              <i>Using the google colab platform for executing python code, I utilized PyTorch to create a Generative Adversarial Network (GAN) to generate "fake" images of my face. At a superficial level, a GAN essentially is composed of a Generator G(x) and a Discriminator D(x). The Generator takes in a pool of real images and produces new examples that the Discriminator is trained to differentiate between real and fake images. Eventually, the discriminator is trained to the point where "fake" images that are very alike in the nature of the real images are generated. The picture in this tile were the results of 1000 epochs of training. To aggregate photos of my face, I uploaded as many pictures of me that I had into a google drive folder and used google colab and OpenCV (Computer Vision) to automatically recognize the location of my face and crop a uniform 128x128 pixel square around it.</i>
              <br/><br/><br/><br/>
              <a href="https://colab.research.google.com/drive/1Imh6NHq8ELFB8i_uqTFc24Ugab8dFOTT" className = "hoverGeneral" target="_blank" rel="noreferrer"  > GO TO AI FACE GAN </a>
            </div>
            <div className="popUpContent" style={{ display: this.state.fourthDescription ? 'block' : 'none', opacity: this.state.fourthDescription ? 1 : 0, visibility: this.state.fourthDescription ? "visible" : "hidden" }}>
              <h4>STUDY BOT</h4>
              <i>DIn hopes of optimizing my study habits, I created a python sms bot that sends daily questions to my phone. Through a text database of questions and answers, the coded bot was able to send a question and detect if the texted response (from my phone) was correct. This bot was hosted on Google Cloud and helped me study for my AP Government course.</i>
              <br/><br/><br/><br/>
              <a href="https://github.com/anikamahns907/APgov-SMSbot" className = "hoverGeneral" target="_blank" rel="noreferrer"  > GO TO STUDY BOT </a>
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
          <br/><br/><br/><br/><br/><br/>
        </div>
      </div>
    );
  }
}

export default Project;
