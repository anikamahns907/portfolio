import React, { Component } from "react";
import axios from "axios";
import JourneyMap from "./JourneyMap";
import { findFlagUrlByIso2Code } from "country-flags-svg";

class Pictures extends Component {
  state = {
    location: "ALASKA",
    content: [],
    locationMap: null
  };

  componentDidMount() {
    this.getLinks(this.state.location);
    this.getLocationMap(this.state.location);
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

  getLocationMap = (locationName) => {
    const stateFlags = {
      "ALASKA": "https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Alaska.svg",
      "KENT ISLAND": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Maryland.svg",
      "URBANA": "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg",
      "PROVIDENCE": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Rhode_Island.svg"
    };

    const countryCodes = {
      "PUERTO RICO": "PR",
      "TOKYO": "JP"
    };

    if (stateFlags[locationName]) {
      this.setState({ locationMap: stateFlags[locationName] });
    } else if (countryCodes[locationName]) {
      const flagUrl = findFlagUrlByIso2Code(countryCodes[locationName]);
      this.setState({ locationMap: flagUrl });
    }
  };

  handleLocationClick = (locationName) => {
    this.setState({ location: locationName }, () => {
      this.getLinks(locationName);
      this.getLocationMap(locationName);
    });
  };

  render() {
    const { location, content, locationMap } = this.state;

    return (
      <div className="mainDiv">
        <div className="mainMarginDiv">
          <h1 className="pictures-title">My Journey Through Images</h1>
          <p className="pictures-description">
            Welcome to my visual journey. As I grew up in each of these places, my love for photography allowed me to capture the essence of diverse cultures and landscapes. Navigate through the locations to see the stories unfold.
          </p>
          <JourneyMap interactive onLocationClick={this.handleLocationClick} activeLocation={location} />
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
