import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

export default class Movie08 extends Component {
 
  render() {
    return (
      <div className="body">
        

        {this.props.moviesData &&
          this.props.moviesData.map((item) => {
              return (
                <div>
                  <figure>
                    <img key ={item.id}src={item.image} alt =''/>
                    <figcaption  key ={item.id}>{item.title}</figcaption>
                  </figure>
                </div>
              );
            })}
          
      
      </div>
          
        
    );
  }
}
