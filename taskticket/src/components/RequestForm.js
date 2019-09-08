import React, { Component } from 'react';
import axios from 'axios';

class Request extends Component {
    constructor(props) {
        super(props);
        this.state = {

            item: "",
            description: "",
            urgency: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit() {
        const { item, description, urgency } = this.state;
        const apiUrl = "http://localhost:4000/request";
        return axios.post(apiUrl, {
            item,
            description,
            urgency
        });
    }
    handleChange(key, event) {
        this.setState({
            [key]: event.target.value
        });
    }
    render() {
        const { item, description, urgency } = this.state;

        return (
            <React.Fragment>
                <form className="FormFields">
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="item">Request Form: </label><br></br>
                        <input
                            onChange={ev => this.handleChange("item", ev)}
                            value={item}
                            type="text"
                            id="item"
                            className="FormField__Input"
                            placeholder="Enter item"
                            name="item"
                        />
                    </div>
                    <div id="description">Description: </div>
                    <div className="FormField">
                        <textarea
                            rows={10}
                            cols={50}
                            defaultValue={""}
                            id="description"
                            className="FormReview"
                            placeholder="Description of issue?"
                            value={description}
                            onChange={ev => this.handleChange("description", ev)}
                        />
                    </div>
                    <label>
                        Level of Urgency:
                        <select value={urgency} onChange={ev => this.handleChange("urgency", ev)}>
                            <option value="Undefined">Undefined</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </label> 
                    <form className="FormField" action="http://localhost:3000/requests/list" method="post" > 
                        <button className="FormField__Button mr-20" onClick={this.handleSubmit} type="submit">Submit</button>
                    </form> 
                </form>
            </React.Fragment>
        )
    }
}

export default Request;