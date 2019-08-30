import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      name: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log('The form was submitted with the following data:');
    console.log(this.state);
  }
  

  render() {
    return (
      <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="business">Business (optional): </label>
            <input type="text" id="business" className="FormField__Input" placeholder="Enter your business name" name="businessName" value={this.state.businessName} onChange={this.handleChange} />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="name">First Name: </label>
            <input type="text" id="name" className="FormField__Input" placeholder="Enter your first name" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="name">Last Name: </label>
            <input type="text" id="name" className="FormField__Input" placeholder="Enter your last name" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="address">Street Address: </label>
            <input type="text" id="address" className="FormField__Input" placeholder="Enter your street address" name="streetAddress" value={this.state.streetAddress} onChange={this.handleChange} />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="address">City: </label>
            <input type="text" id="address" className="FormField__Input" placeholder="Enter your city" name="city" value={this.state.city} onChange={this.handleChange} />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="address">State: </label>
            <input type="text" id="address" className="FormField__Input" placeholder="Enter your state" name="state" value={this.state.state} onChange={this.handleChange} />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="address">Zip Code: </label>
            <input type="text" id="address" className="FormField__Input" placeholder="Enter your zip code" name="streetAddress" value={this.state.streetAddress} onChange={this.handleChange} />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="phoneNumber">Phone Number: </label>
            <input type="number" id="number" className="FormField__Input" placeholder="Enter your phone number" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">E-Mail: </label>
            <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">Password: </label>
            <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
          </div>
          
          <div className="FormField">
            <button className="FormField__Button mr-20">Sign Up</button> <Link to="/login" className="FormField__Link">Have an account?</Link>
          </div>
        </form>
      </div>
    );
  }
}
export default SignUp;
