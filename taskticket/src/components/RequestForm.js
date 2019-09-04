import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Request extends Component {
    constructor() {
        super();

        this.state = {
            item: "",
            description: "",
            date: "",
            urgency: ""
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
    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Your message has been sent! Urgency Level : ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <Router path="/request">
                <form onSubmit={this.handleSubmit} className="FormFields">
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="item">Item: </label><br></br>
                        <input type="text" id="item" className="FormField__Input" placeholder="Enter item " name="item" value={this.state.itemName} onChange={this.handleChange} />
                    </div>
                    <div className="App__Form"></div>
                    <div id="writeMessage">Message: </div>
                    <div className="FormField">
                        <textarea
                            rows={10}
                            cols={50}
                            defaultValue={""}
                            id="description"
                            className="FormReview"
                            placeholder="Description of issue?"
                            name="comment"
                            onChange={this.handleChange}
                        />
                    </div>
                    <label>
                        Level of Urgency:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="UNDEFINED">Undefined</option>
                            <option value="LOW">Low</option>
                            <option value="MEDIUM">Medium</option>
                            <option value="HIGH">High</option>
                        </select>
                    </label>
                    <div className="FormField">
                        <button className="FormField__Button mr-20">Send Message</button> <Link to="/requestList" className="FormField__Link">To Messages</Link>
                    </div>
                </form>
            </Router>

        )
    }
}


export default Request;