import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="Header-main">
        <nav className="navbar navbar-expand-md navbar-green affix">
          <div className="container">
            <Link className="navbar-brand" to="/"><span>Book</span>Lab</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="collapsibleNavbar">
              <ul className="navbar-nav ml-auto custom-nav-ul">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">Sign Up</Link>
                </li> 
              </ul>
            </div> 
          </div>
        </nav>
      </div>
    );
  }
}
export default Header;