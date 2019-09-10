import React, { Component } from 'react';

class RequestView extends Component {
    // componentDidLoad(){
    //     //do fetch to get one 
    //     this.setState
    // }
    render() {
        return (
            <div className="RequestView">
                <h3>Welcome to View Page</h3>
                <p>Please read the comments carefully and be respectful!!!</p>
                <form>
                    <p>Display message with a certain id</p>
                    <textarea>Comment here</textarea>
                    <button>Submit your kind comment</button>
                </form>
            </div>

        );
    }
}

export default RequestView;