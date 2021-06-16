import React from "react";
// import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Movies08 from "./components/Movie08";
import Weather07 from "./components/Weather07";
// import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Weather07/>
        <Movies08 />
        <Footer />
      </div>
    );
  }
}

export default App;
