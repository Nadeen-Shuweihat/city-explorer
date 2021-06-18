import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherandMovies from "./components/WeatherandMovies";



class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <WeatherandMovies />
        <Footer />
      </div>
    );
  }
}

export default App;
