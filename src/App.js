import React from "react";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.
  state = {
    cityInfo: {},
    error: "",
  };
  // }

  // updateCityNameState = (e) => {
  //   this.setState({
  //     cityName: e.target.value,
  //   });
  // };

  getCityData = async (e) => {
    e.preventDefault();
    console.log("getCityData");

    let cityName = e.target.cityname.value;
    let serverUrl = process.env.REACT_APP_SERVER;
    let url = `${serverUrl}/weather?lat=-33.87&lon=151.21&searchQuery=${cityName}`;

    try {
      console.log("getting axios");
      let data = await axios.get(url);
      //   const data = await axios({
      //     method: 'get',
      //     url: url,
      // })
      this.setState({ cityInfo: data.data[0], error: "" });
      console.log(this.state.cityInfo);
    } catch {
      this.setState({ error: "There is an error , choose another city name", cityInfo: null });
      console.error("error in weather data");
    }
  };

  // UpdateSearchQuery = (e) => {
  //   this.setState({
  //     cityInfo: e.target.value,
  //   });
  // };

  render() {
    return (
      <div className="body">
        <Header />
        <Form onSubmit={this.getCityData} className="form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>City Name:</Form.Label>
            <Form.Control
              name="cityname"
              type="text"
              placeholder="write city name"
            />
            {/* <input name='cityName' onChange={this.UpdateSearchQuery} className="text-muted" /> */}
          </Form.Group>
          <input type="submit" />
          {/* <Button
            className="button"
            variant="primary"
            onClick={this.getCityData}
          >
            Explore!
          </Button> */}
          {this.state.cityInfo ? (
            <div className="result">
              <p> moon_phase : {this.state.cityInfo.moon_phase}</p>
              <p> snow_depth :{this.state.cityInfo.snow_depth}</p>
              <p> clouds : {this.state.cityInfo.clouds}</p>
            </div>
          ) : (
            <p> ATTENTION{this.state.error}</p>
          )}
        </Form>
        <Footer />
      </div>
    );
  }
}

export default App;
