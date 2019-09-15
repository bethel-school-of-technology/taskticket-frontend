import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import RequestPages from './components/RequestPages';
import RequestForm from './components/RequestForm';
import Requests from './components/RequestList';
import RequestView from './components/RequestView';
import ErrorHandler from './components/ErrorHandler';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';


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
              <Route path="/requests" component={RequestPages} />
              <Route path="/requests/form" component={RequestForm} />
              <Route path="/requests/list" component={Requests} />
              <Route path="/requests/view" component={RequestView} />
              <Route path="/userProfile" component={UserProfile} />
            </div>
          </div>
          <Footer />
        </ErrorHandler>
      </Router>

    );
  }
}

export default App;