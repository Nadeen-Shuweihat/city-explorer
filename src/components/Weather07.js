import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Weather07 extends Component {
  render() {
    return (
      <div className="body">
        {this.props.cityInfo ? (
          <div className="result">
            {this.props.cityInfo.map((item) => {
              return (
                <div className="weatherData">
                  <p key={item.id}> Description : {item.description}</p>
                  <p key={item.id}> valid_date :{item.valid_date}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="error"> ATTENTION {this.props.error}</p>
        )}
      </div>
    );
  }
}
