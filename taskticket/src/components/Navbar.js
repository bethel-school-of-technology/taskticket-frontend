import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navigation">
                    <ul className="menu">
                        <li><a className="navlink" href="/">Home</a></li>
                        <li className="signup"><a className="navlink" href="/userProfile">Profile</a></li>
                        <li className="signup"><a className="navlink" href="/requests">Requests</a></li>
                        <li className="signup"><a className="navlink" href="/signup">Sign Up</a></li>
                        <li className="signup"><a className="navlink" href="/login">Login</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}


export default Navbar;