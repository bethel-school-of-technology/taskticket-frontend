import React, { Component } from 'react';
import axios from 'axios';

class Request extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: "",
            message: "",
            date: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit() {
        const { userId, message, date } = this.state;
        const apiUrl = "http://localhost:4000/request";
        return axios.post(apiUrl, {
            userId,
            message,
        });
    }
    handleChange(key, event) {
        this.setState({
            [key]: event.target.value
        });
    }

    componentDidMount() {
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds
        this.setState({
          //Setting the value of the date time
          date:
          month + '/' + date + '/' + year + ' ' + hours + ':' + min + ':' + sec,
        });
    }

    render() {
        const { userId, message } = this.state;

        let desc = "Responses: "

        const comments = [{
            userId: 0,
            message: "Hi Joe, My name is Sarah and I will be helping you resolve your issue",
            date: "Date"
        }, {
            userId: 1,
            message: "Hi Sarah, I really appreciate it.",
            date: "Date"
        }, {
            userId: 0,
            message: "First this is first... Have you checked to see if there is power going to your device?",
            date: "Date"
        }];

        const listItems = comments.map((message, index) =>
            (<div className="comment" key={index}>
                <div className="message">{message.message}</div>
                <p>{message.userId} = {this.state.date}</p>
            </div>)
        );

        return (
            <React.Fragment>
                <form className="FormFields">
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="item">Request View: </label><br></br>
                        Initial Request will be here!
                        <div className="ViewComment">
                            <comment value={userId}>
                                <p>{desc}</p>
                                {listItems} 
                            </comment>    
                        </div>
                        
                    </div>
                    <div id="description">Respond: </div>
                    <div className="FormField">
                        <textarea
                            rows={3}
                            cols={50}
                            defaultValue={""}
                            id="description"
                            className="FormReview"
                            placeholder="Respond here"
                            value={message}
                            onChange={ev => this.handleChange("description", ev)}
                        />
                    </div>

                    <form className="FormField" action="http://localhost:4000/request" method="post" >
                        <button className="FormField__Button mr-20" onClick={this.handleSubmit} type="submit">Submit</button>
                    </form>
                </form>
            </React.Fragment>
        )

    }


}

// componentDidMount(){

// }

// render() {
//     

//     
// //     )
// // }


export default Request;

// class RequestView extends Component {
//     // componentDidLoad(){
//     //     //do fetch to get one 
//     //     this.setState
//     // }
//     render() {
//         return (
//             <div className="RequestView">
//                 <h3>Welcome to View Page</h3>
//                 <p>Please read the comments carefully and be respectful!!!</p>
//                 <form>
//                     <p>Display message with a certain id</p>
//                     <textarea>Comment here</textarea>
//                     <button>Submit your kind comment</button>
//                 </form>
//             </div>

//         );
//     }
// }

// export default RequestView;