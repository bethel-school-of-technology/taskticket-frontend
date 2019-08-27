import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Request from './components/Request';
import Payment from './components/Payment';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/request" component={Request} />
        <Route path="/payment" component={Payment} />
      </Router>
    </div>
  );
}

export default App;
