import React, { Component } from 'react';
import axios from 'axios';

let APIUrl = "http://localhost:4000/request/list";

class Request extends Component {
    state = {
        comments: [],
        errors: null
    }
    // componentDidMount() {
    //     fetch(APIUrl)
    //         .then(rep => rep.json())
    //         .then(payload => {
    //             let loadedComments = payload.filter((i, index) => index < 50);
    //             console.log(loadedComments);
    //             this.setState({ comments: loadedComments })
    //         })
    //         .catch(err => this.setState({ error: err }));
    // }
    constructor(props) {
        super(props);
        this.state = {


        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit() {
        const { comments } = this.state;
        const apiUrl = "http://localhost:4000/request";
        return axios.post(apiUrl, {
            comments

        });
    }
    handleChange(key, event) {
        this.setState({
            [key]: event.target.value
        });
    }
    render() {
        const { loadedComments } = this.state;

        return (
            <React.Fragment>
                <form className="FormFields">
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="item">Request List: </label><br></br>
                        <p>This is where the list of all comments will be</p>
                        {/* {this.state.comments.map(

                        )} */}
                    </div>

                </form>
            </React.Fragment>
        )
    }
}

export default Request;



// class RequestList extends Component {
//     constructor(props){
//         super(props);
//         this.state= {
//             comment: "",
//             author: ""
//         };    
//     }

//     // componentDidLoad(){
//     //     //do fetch to get one 
//     //     this.setState
//     // }
//     render() {
//         return (
//             <div className="RequestList">
//                 <h3>Request List</h3>
//                 <div>
//                     <ul>
//                         <li>
//                             <a href="http://localhost:4000/request">Click me</a>
//                         </li>
//                     </ul>
//                 </div>
//             </div>

//         );
//     }
// }

// export default RequestList;