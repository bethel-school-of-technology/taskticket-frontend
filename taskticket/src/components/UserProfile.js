import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      business: "",
      streetAddress: "",
      city: "",
      state: "",
      zipcode: "",
      phoneNumber: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { business, streetAddress, city, state, zipcode, phoneNumber } = this.state;
    const apiUrl = "http://localhost:4000/userProfile";
    return axios.post(apiUrl, {
      business,
      streetAddress,
      city,
      state,
      zipcode,
      phoneNumber
    });
  }

  handleChange(key, event) {
    this.setState({
      [key]: event.target.value
    });
  }


  render() {
    const { business, streetAddress, city, state, zipcode, phoneNumber } = this.state;

    return (
      <React.Fragment>
        <div className="FormCenter">
          <form onSubmit={this.handleSubmit} className="FormFields">
            <div className="FormField">
              <label className="FormField__Label" htmlFor="business">Business (optional): </label>
              <input
                onChange={ev => this.handleChange("business", ev)}
                type="text"
                id="business"
                className="FormField__Input"
                placeholder="Enter your business name"
                name="business"
                value={business}
              />
            </div>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="address">Street Address: </label>
              <input
                onChange={ev => this.handleChange("streetAddress", ev)}
                type="text"
                id="address"
                className="FormField__Input"
                placeholder="Enter your street address"
                name="streetAddress"
                value={streetAddress}
              />
            </div>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="address">City: </label>
              <input
                onChange={ev => this.handleChange("city", ev)}
                type="text"
                id="address"
                className="FormField__Input"
                placeholder="Enter your city"
                name="city"
                value={city}
              />
            </div>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="address">State: </label>
              <input
                onChange={ev => this.handleChange("state", ev)}
                type="text"
                id="address"
                className="FormField__Input"
                placeholder="Enter your state"
                name="state"
                value={state}

              />
            </div>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="address">Zip Code: </label>
              <input
                onChange={ev => this.handleChange("zipcode", ev)}
                type="text"
                id="address"
                className="FormField__Input"
                placeholder="Enter your zip code"
                name="zipcode"
                value={zipcode}
              />
            </div>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="phoneNumber">Phone Number: </label>
              <input
                onChange={ev => this.handleChange("phoneNumber", ev)}
                type="number"
                id="number"
                className="FormField__Input"
                placeholder="Enter your phone number"
                name="phoneNumber"
                value={phoneNumber}
              />
            </div>

            <div className="FormField" action="http://localhost:4000/userProfile" method="post">
              <button className="FormField__Button mr-20" onClick={this.handleSubmit} type="submit">Update</button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
export default UserProfile;
