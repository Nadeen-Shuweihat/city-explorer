import React, { Component } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Movie08 from "./Movie08";
import Weather07 from './Weather07';

class WeatherandMovies extends Component {
  state = {
    cityInfo: [],
    moviesData: [],
    error: "",
  };

  getCityData = (e) => {
    e.preventDefault();
    console.log("getCityData");

    let cityName = e.target.cityname.value;
    let serverUrl = process.env.REACT_APP_SERVER;
    let url = `${serverUrl}/weather?searchQuery=${cityName}`;
    let movieUrl = `${serverUrl}/movies?searchQuery=${cityName}`;

    axios
      .get(movieUrl)
      .then((results) => {
        this.setState({ moviesData: results.data, error: "" });
        console.log("moviedata", this.state.moviesData);
      })
      .catch((error) => {
        this.setState({
          error: " There is an error , choose another movie name",
          moviesData: null,
        });
      });

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
    return <div className="body">
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

   <Weather07 cityInfo={this.state.cityInfo} error = {this.state.error} />
   <Movie08 moviesData={this.state.moviesData} error = {this.state.error} />
  </div>
  }
}
export default WeatherandMovies;
