
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
                    <i>Living this nomadic lifestyle has been feral, intriguing, and surreal.</i>
                    <br/><br/><br/><br/>

                    <div className="locationButtonDiv">
                        <button style={{background: this.state.location === "ALASKA" ? "#000" : "transparent", color: this.state.location === "ALASKA" ? "#FFFFFF" : "#000"}} onClick={() => this.changeLocation("ALASKA")}>ALASKA</button>
                        <button style={{background: this.state.location === "KENT ISLAND" ? "#000" : "transparent", color: this.state.location === "KENT ISLAND" ? "#FFFFFF" : "#000"}} onClick={() => this.changeLocation("KENT ISLAND")}>KENT ISLAND</button>
                        <button style={{background: this.state.location === "URBANA" ? "#000" : "transparent", color: this.state.location === "URBANA" ? "#FFFFFF" : "#000"}} onClick={() => this.changeLocation("URBANA")}>URBANA</button>
                        <button style={{background: this.state.location === "TOKYO" ? "#000" : "transparent", color: this.state.location === "TOKYO" ? "#FFFFFF" : "#000"}} onClick={() => this.changeLocation("TOKYO")}>TOKYO</button>
                        <button style={{background: this.state.location === "PUERTO RICO" ? "#000" : "transparent", color: this.state.location === "PUERTO RICO" ? "#FFFFFF" : "#000"}} onClick={() => this.changeLocation("PUERTO RICO")}>PUERTO RICO</button>
                    </div>
                    <br/><br/><br/>


     
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