import React from "react"; //imports react


class Pictures extends React.Component {

state={location: "ALASKA"}
changeLocation(location) {
    this.setState({location: location})
}

// componentDidMount() {
//     var self = this;
//     axios
//       .get(
//         "https://vesl6is7lb.execute-api.us-east-2.amazonaws.com/default/prqr?locationId=" +
//           this.state.locationId
//       )
//       .then(function (response) {
//         var temp = [];
//         var imageData = response.data.resources;
//         for (var i = 0; i < imageData.length; i++) {
//           temp.push(imageData[i].secure_url);
//         }
//         console.log(temp);
//         self.setState({ content: temp });
//       })
//       .catch(function (error) {
//         // handle error
//         console.log(error);
//       })
//       .then(function () {
//         // always executed
//       });
//   }

  render() {
    return (
      //created a center div for introduction
      <div className="mainDiv">
        <div className="mainMarginDiv">
        <i className="introText">
            pictures at various places
          </i>
          <div className = "locationButtonDiv">
              <button onClick ={()=> this.changeLocation("ALASKA")}>ALASKA</button>
              <button onClick ={()=> this.changeLocation("KENT ISLAND")}>KENT ISLAND</button>
              <button onClick ={()=> this.changeLocation("URBANA")}>URBANA</button>
              <button onClick ={()=> this.changeLocation("TOKYO")}>TOKYO</button>
              <button onClick ={()=> this.changeLocation("PUERTO RICO")}>PUERTO RICO</button>

          </div>
          

          <p>{this.state.location}</p>
          {/* <div className="mainPictures">
            {this.state.content.map((picture, i) => {
              return (
                <div className="imageDiv" key={i}>
                  <div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <img
                      src={picture}
                      alt={picture
                        .split("/")
                        .pop()
                        .split("_")[0]
                        .replace("%20", " ")}
                      className="img"
                    />
                    <span>
                      {picture
                        .split("/")
                        .pop()
                        .split("_")[0]
                        .replace("%20", " ")}
                    </span>
                  </div>
                </div>
              );
            })}
          </div> */}
        </div>
      </div>
    );
  }
}

export default Pictures;
