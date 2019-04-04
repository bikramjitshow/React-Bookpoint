import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Login extends Component {
  render() {
    return (
      <div className="Login-outer">
        <h1 className="login-h1">Sign In With Us</h1>
        <form action="/action_page.php" className="needs-validation login-form" novalidate>
          <div className="form-group">
            <label for="uname">Username:</label>
            <input type="text" className="form-control" id="uname" placeholder="Enter username" name="uname" required />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>
          <div className="form-group">
            <label for="pwd">Password:</label>
            <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" required />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>
          <div className="form-group form-check">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" name="remember" required /> I agree on Terms &amp; Condition.
              <div className="valid-feedback">Valid.</div>
              <div className="invalid-feedback">Check this checkbox to continue.</div>
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
