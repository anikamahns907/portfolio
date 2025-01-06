import React, { Component } from "react";
import axios from "axios";

class Pictures extends Component {
  state = {
    location: "ALASKA",
    content: [],
  };

  componentDidMount() {
    this.getLinks("ALASKA");
  }

  getLinks = (locationName) => {
    axios
      .get(
        `https://k7rdqegg4c.execute-api.us-east-1.amazonaws.com/default/anika-portfolio?locationId=${locationName}`
      )
      .then((response) => {
        const imageUrls = response.data.resources.map((resource) => resource.secure_url);
        this.setState({ location: locationName, content: imageUrls });
      })
      .catch((error) => {
        console.error("Error fetching image data:", error);
      });
  };

  changeLocation = (locationName) => {
    this.setState({ location: "loading..." }, () => {
      this.getLinks(locationName);
    });
  };

  render() {
    const { location, content } = this.state;

    return (
      <div className="mainDiv">
        <div className="mainMarginDiv">
        <br />

        <p className="nomadic-text">Living this nomadic lifestyle has been feral, intriguing, and surreal.</p>
        <br />
          <br />
          <br />
          <br />

          <div className="locationButtonDiv">
            {["ALASKA", "KENT ISLAND", "URBANA", "TOKYO", "PUERTO RICO"].map((place) => (
              <button
                key={place}
                style={{
                  background: location === place ? "#000" : "transparent",
                  color: location === place ? "#FFFFFF" : "#000",
                }}
                onClick={() => this.changeLocation(place)}
              >
                {place}
              </button>
            ))}
          </div>

          <br />
          <br />
          <br />

          <div className="mainPictures">
            {location !== "loading..." &&
              content.map((picture, index) => (
                <div className="imageDiv" key={index}>
                  <img src={picture} alt="Location" className="photo" />
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Pictures;
