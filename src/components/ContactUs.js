import React, { Component } from 'react'
import axios from 'axios'

export class ContactUs extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			userId: '',
			title: '',
			body: ''
		}
	}

	changeHandler = e => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
		.then(
			response => { console.log(response) }
		)
		.catch(
			error => { console.log(error) }
		)
	}
	
  render() {
		const { userId, title, body } = this.state
    return (
      <div className="Login-outer">
        <h1 className="login-h1">Contact With Us</h1>
        <form onSubmit={this.submitHandler} className="needs-validation login-form" noValidate>
          <div className="form-group">
            <label htmlFor="userId">User Id:</label>
            <input type="text" className="form-control" id="userId" value={userId} onChange={this.changeHandler} placeholder="Enter full name" name="userId" required />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>
					<div className="form-group">
            <label htmlFor="title">Title:</label>
            <input type="text" className="form-control" id="title" value={title} onChange={this.changeHandler} placeholder="Enter full name" name="title" required />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>
					<div className="form-group">
            <label htmlFor="body">Body:</label>
            <input type="text" className="form-control" id="body" value={body} onChange={this.changeHandler} placeholder="Enter full name" name="body" required />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>
          <button type="submit" className="btn btn-primary">Add Data</button>
        </form>
      </div>
    )
  }
}

export default ContactUs
