import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Request from './components/Request';
import Payment from './components/Payment';
import ErrorHandler from './components/ErrorHandler';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
        <Router>
          <ErrorHandler>
            <Navbar />
            <div className="App">
              <div className="App__Aside"><Route path="/" component={Header} /></div>
              <div className="App__Form">
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/signUp" component={SignUp} />
                <Route path="/request" component={Request} />
                <Route path="/payment" component={Payment} />
              </div>
            </div>
          </ErrorHandler>
        </Router>
        
    );
  }
}
    
export default App;
