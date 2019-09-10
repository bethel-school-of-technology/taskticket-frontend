import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit() {
        const { email, password } = this.state;
        const apiUrl = "http://localhost:4000/login";
        return axios.post(apiUrl, {
          email,
          password
        });
      }

      handleChange(key, event) {
        this.setState({
            [key]: event.target.value
        });
    }

    // handleSubmit(e) {
    //     e.preventDefault();

    //     console.log('The form was submitted with the following data:');
    //     console.log(this.state);
    // }

    render() {
        const { email, password } = this.state
        return (
            <React.Fragment>
            <div className="FormCenter">
                <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
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
                        <input
                        type="password" 
                        id="password" 
                        className="FormField__Input" 
                        placeholder="Enter your password" 
                        name="password" 
                        value={password} 
                        onChange={ev => this.handleChange('password', ev)} />
                    </div>

                    <div className="FormField" action="http://localhost:4000/login" method="post">
                        <button className="FormField__Button mr-20"
                        onClick={this.handleSubmit}
                        type="submit">Login</button> <Link to="/signUp" className="FormField__Link">Create an account</Link>
                    </div>
                </form>
            </div>
            </React.Fragment>

        );
    }
}

export default Login;