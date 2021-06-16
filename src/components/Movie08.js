import React, { Component } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Movie08 extends Component {
  state = {
   
    error: "",
    moviesData: [],
  };

  getCityData = (e) => {
    e.preventDefault();
    console.log("getCityData");

    let cityName = e.target.cityname.value;
    let serverUrl = process.env.REACT_APP_SERVER;
   
    let movieUrl = `${serverUrl}/movies?searchQuery=${cityName}`;

    
    
    axios
    .get(movieUrl)
    .then((results) => {
          this.setState({ moviesData: results.data, error: "" });
        console.log('moviedata',this.state.moviesData);
      })
      .catch((error) => {
        this.setState({
          error: " There is an error , choose another city name",
          moviesData: null,
        });
      });
  };

  render() {
    return (
      <div className="body">
        <Form onSubmit={this.getCityData} className="form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>City Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="write city name"
              name="cityname"
            />
          </Form.Group>
          <input type="submit" className="btn btn-primary" />
        </Form>

   
          {/* <p className="error"> ATTENTION {this.state.error}</p> */}
    
        <>
        { this.state.moviesData.map((item) => {
            return (
                <figure> 
                    <img src={item.image}/>
                    <figcaption>{item.title}</figcaption>
                </figure>
            )
        }) }
          
        
        </>
      </div>
    );
  }
}
