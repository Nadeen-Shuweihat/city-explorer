import React, { Component } from "react";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "",
      cityInfo: {},
      displayInfo: false,
    };
  }
  updateCityNameState = (e) => {
    this.setState({
      cityName: e.target.value,
    });
  };
  getCityData = async (e) => {
    e.preventDefault();
    const axiosResponse = await axios.get(
      `https://us1.locationiq.com/v1/search.php?key=pk.3f813a6f4eddcbf99e2fe25098a5daba&city=${this.state.cityName}&format=json`
    );
    console.log(axiosResponse);
    this.setState({
      cityInfo: axiosResponse.data[0],
      displayInfo: true,
    });
  };
  render() {
    return (
      <div className='body'>
        <Header />
        <Form onSubmit={this.getCityData} className="form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label >City Name:</Form.Label>
            <Form.Control
              onChange={this.updateCityNameState}
              type="text"
              placeholder="write a name of a city"
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>
          <Button className="button" variant="primary" type="submit">
            Explore!
          </Button>
        </Form>
        {this.state.displayInfo && (
          <div className='result'>
            <p className="city1">{this.state.cityInfo.display_name}</p>
            <p className="city">{this.state.cityInfo.lat}</p>
            <p className="city">{this.state.cityInfo.lon}</p>
            <img
              className="map"
              src={`https://maps.locationiq.com/v3/staticmap?key=pk.3f813a6f4eddcbf99e2fe25098a5daba&q&center=${this.state.cityInfo.lat},${this.state.cityInfo.lon}&zoom=15`}
              alt=""
            />
          </div>
        )}
        <Footer />
      </div>
    );
  }
}
export default App;
