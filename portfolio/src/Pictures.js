import React from "react"; //imports react
import axios from 'axios';


class Pictures extends React.Component {

    state = { location: "ALASKA", content: [], }
    componentDidMount() {
        this.getLinks("ALASKA");
    }
    getLinks(locationNameFromButton) {
        var self = this;
        axios
            .get(
                "https://k7rdqegg4c.execute-api.us-east-1.amazonaws.com/default/anika-portfolio?locationId=" +
                locationNameFromButton
            )
            .then(function (response) {
                var temp = [];
                var imageData = response.data.resources;
                for (var i = 0; i < imageData.length; i++) {
                    temp.push(imageData[i].secure_url);
                }
                console.log(temp);

                self.setState({ location: locationNameFromButton, content: temp });
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }
    changeLocation(locationNameFromButton) {
        this.setState({ location: "loading..." }, () => { this.getLinks(locationNameFromButton); })

    }


    render() {
        return (
            //created a center div for introduction
            <div className="mainDiv">
                <div className="mainMarginDiv">

                    <div className="locationButtonDiv">
                        <button style={{background: this.state.location === "ALASKA" ? "#b2dbac" : "transparent"}} onClick={() => this.changeLocation("ALASKA")}>ALASKA</button>
                        <button style={{background: this.state.location === "KENT ISLAND" ? "#b2dbac" : "transparent"}} onClick={() => this.changeLocation("KENT ISLAND")}>KENT ISLAND</button>
                        <button style={{background: this.state.location === "URBANA" ? "#b2dbac" : "transparent"}} onClick={() => this.changeLocation("URBANA")}>URBANA</button>
                        <button style={{background: this.state.location === "TOKYO" ? "#b2dbac" : "transparent"}} onClick={() => this.changeLocation("TOKYO")}>TOKYO</button>
                        <button style={{background: this.state.location === "PUERTO RICO" ? "#b2dbac" : "transparent"}} onClick={() => this.changeLocation("PUERTO RICO")}>PUERTO RICO</button>
                    </div>


     
                    <div className="mainPictures">
                        {this.state.location === "loading..." ? null : this.state.content.map((picture, i) => {
                            return (
                                <div className="imageDiv" key={i}>
                                    <div> <img
                                        src={picture}
                                        alt="alt"
                                        className="photo"
                                    />
                                    </div></div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pictures;
