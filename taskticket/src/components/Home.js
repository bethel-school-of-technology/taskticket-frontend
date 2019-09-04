import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="Home_Page">
                <h1 className="App__Name">About</h1>
                <div>
                    <p className="aboutP">We started by saying YES to God!
                    Placed together, by no accident,
                    4 team members embark on a journey of development-
                    through coding and internally.
                    Patience and dedication were tested.
                    Emotions of all kinds were to arise, but in the end,
                    WE prevailed. WE are developers, WE are qualified,
                but most importantly WE are family!</p>
                </div>

                <hr></hr>

                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

                <div className="Ind_About">
                    <div className="Mandee_About">
                        <h3>Mandee Miller</h3>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/mandee.miller.9" class="fa fa-facebook"><span className="hide_text">Test</span></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mandee-miller-35a99b185/" class="fa fa-linkedin"><span className="hide_text">Test</span></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/mandeelaraye" class="fa fa-github"><span className="hide_text">Test</span></a>
                    </div>



                    <div className="Shannon_About">
                        <h3>Shannon Wolff</h3>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/shewolff182" class="fa fa-facebook"><span className="hide_text">Test</span></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/shewolff182/" class="fa fa-linkedin"><span className="hide_text">Test</span></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Shewolff182" class="fa fa-github"><span className="hide_text">Test</span></a>
                    </div>

                </div>

                <div className="Ind_About">
                    <div className="Vali_About">
                        <h3>Vali Masca</h3>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/laurean.valer" class="fa fa-facebook"><span className="hide_text">Test</span></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/vali-l-masca-06568511b/" class="fa fa-linkedin"><span className="hide_text">Test</span></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/valimasca" class="fa fa-github"><span className="hide_text">Test</span></a>
                    </div>

                    <div className="James_About">
                        <h3>James Ramsey</h3>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/james.ramsey.758" class="fa fa-facebook"><span className="hide_text">Test</span></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/ramseyman86" class="fa fa-github"><span className="hide_text">Test</span></a>
                    </div>
                </div>


            </div>
        )
    }
}


export default Home;