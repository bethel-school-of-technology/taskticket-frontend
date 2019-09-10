import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      fullName: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { email, password, fullName } = this.state;
    const apiUrl = "http://localhost:4000/signup";
    return axios.post(apiUrl, {
      email,
      password,
      fullName
    });
  }
  handleChange(key, event) {
    this.setState({
        [key]: event.target.value
    });
}

  // handleSubmit(e) {
  //   e.preventDefault();

  //   console.log('The form was submitted with the following data:');
  //   console.log(this.state);
  // }


  render() {
    const { email, password, fullName } = this.state;

    return (
      <React.Fragment>
      <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="name">Full Name: </label>
            <input 
            onChange={ev => this.handleChange('fullName', ev)}
            type="text" 
            id="fullName" 
            className="FormField__Input" 
            placeholder="Enter your full name" 
            name="fullName"
            value={fullName} 
             />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">E-Mail: </label>
            <input 
            type="email" 
            id="email" 
            className="FormField__Input" 
            placeholder="Enter your email" 
            name="email" 
            value={email} 
            onChange={ev => this.handleChange('email', ev)} />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">Password: </label>
            <input type="password" 
            id="password" 
            className="FormField__Input" 
            placeholder="Enter your password" 
            name="password" 
            value={password} 
            onChange={ev => this.handleChange('password', ev)} />
          </div>

          <div className="FormField" action="http://localhost:4000/signup" method="post">
            <button className="FormField__Button mr-20" 
            onClick={this.handleSubmit} 
            type="submit">Sign Up</button> <Link to="/login" className="FormField__Link">Have an account?</Link>
          </div>
        </form>
      </div>
      </React.Fragment>
    );
  }
}
export default SignUp;
