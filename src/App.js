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
      cityInfo: "",
      error: "",
    };
  };

  // updateCityNameState = (e) => {
  //   this.setState({
  //     cityName: e.target.value,
  //   });
  // };

  getCityData = async (e) => {

    e.preventDefault();

    let cityName = e.target.value;
    let serverUrl = process.env.REACT_APP_SERVER;
    let url = `${serverUrl}/weather?lat=-33.87&lon=151.21&searchQuery=${cityName}`;

    try {
      let data = await axios.get(url);
      this.setState({ cityInfo: data.data[0], error: "" });
      console.log(this.state.cityInfo);
    } catch {
      this.setState({ error: "There is an error" });
    }
  };
 

  render() {
    return (
      <div className="body">
        <Header />
        <Form onSubmit={this.getCityData} className="form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>City Name:</Form.Label>
            <Form.Control
              onChange={this.getCityData}
              type="text"
              placeholder="write city name"
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
          <div className="result">
            <p> moon_phase : {this.state.cityInfo.moon_phase}</p>
            <p> snow_depth :{this.state.cityInfo.snow_depth}</p>
            <p> clouds : {this.state.cityInfo.clouds}</p>
          </div>
        )}
        <Footer />
      </div>
    );
  }
}
export default App;
