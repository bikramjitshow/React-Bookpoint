import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class SignUp extends Component {
  render() {
    return (
      <div className="Login-outer">
        <h1 className="login-h1">Sign Up With Us</h1>
        <form action="/action_page.php" className="needs-validation login-form" novalidate>
          <div className="form-group">
            <label for="fullname">Full Name:</label>
            <input type="text" className="form-control" id="fullname" placeholder="Enter full name" name="fullname" required />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>
          <div className="form-group">
            <label for="email">Email:</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email id" name="email" required />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>
          <div className="form-group">
            <label for="mobile">Mobile:</label>
            <input type="mobile" className="form-control" id="mobile" placeholder="Enter mobile no." name="mobile" required />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>
          <div className="form-group">
            <label for="pwd">Password:</label>
            <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" required />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>
          <div className="form-group">
            <label for="pwd">Confirm Password:</label>
            <input type="password" className="form-control" id="repwd" placeholder="Re-enter password" name="pswd" required />
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
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
