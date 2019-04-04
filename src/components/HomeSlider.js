import React, { Component } from 'react'

export class HomeSlider extends Component {
  render() {
    return (
      <div>
        <div id="demo" className="carousel slide" data-ride="carousel">
          <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" className="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
          </ul>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="assets/images/Banner1.jpg" alt="Los Angeles" className="slider-img img-fluid" />
              <div className="carousel-caption">
                <h3>Los Angeles</h3>
                <p>We had such a great time in LA!</p>
              </div>   
            </div>
            <div className="carousel-item">
              <img src="assets/images/Banner2.jpg" alt="Chicago" className="slider-img img-fluid" />
              <div className="carousel-caption">
                <h3>Chicago</h3>
                <p>Thank you, Chicago!</p>
              </div>   
            </div>
          </div>
          <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>
    )
  }
}

export default HomeSlider
