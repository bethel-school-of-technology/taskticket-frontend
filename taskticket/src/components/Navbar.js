import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navigation">
                    <ul className="menu">
                        <li><a href="/">Home</a></li>
                        <li className="signup"><a href="/request">Request</a></li>
                        <li className="signup"><a href="/signup">Sign Up</a></li>
                        <li className="signup"><a href="/login">Login</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}


export default Navbar;