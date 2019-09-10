import React, { Component } from 'react';

class RequestList extends Component {
    // componentDidLoad(){
    //     //do fetch to get one 
    //     this.setState
    // }
    render() {
        return (
            <div className="RequestList">
                <h3>Request List</h3>
                <div>
                    <ul>
                        <li>
                            <a href="http://localhost:4000/request">Click me</a>
                        </li>
                    </ul>
                </div>
            </div>

        );
    }
}

export default RequestList;