import React, { Component } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Weather07 extends Component {

  state = {
    cityInfo: [],
    error: "",
  };

  getCityData = (e) => {
    e.preventDefault();
    console.log("getCityData");

    let cityName = e.target.cityname.value;
    let serverUrl = process.env.REACT_APP_SERVER;
    let url = `${serverUrl}/weather?searchQuery=${cityName}`;

 
    axios
      .get(url)
      .then((data) => {
        this.setState({ cityInfo: data.data, error: "" });
        console.log(this.state.cityInfo);
      })
      .catch((error) => {
        this.setState({
          error: "There is an error , choose another city name",
          cityInfo: null,
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

        {this.state.cityInfo ? (
          <div className="result">
            {this.state.cityInfo.map((item) => {
              return (
                <div className="weatherData">
                  <p> Description : {item.description}</p>
                  <p> valid_date :{item.valid_date}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="error"> ATTENTION{this.state.error}</p>
        )}
        
      </div>
    );
  }
}

