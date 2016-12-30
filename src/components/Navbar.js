import React from 'react';
import '../css/Navbar.css';

class Navbar extends React.Component {
    render() {
      return (
        <nav className="Navbar">
            <ul>
                <li><a href="#"><span>What I Do</span></a></li>
                <li><a href="#"><span>What I Like</span></a></li>
                <li><a href="#"><span>What I Think</span></a></li>
            </ul>
        </nav>

      )
    }
}

export default Navbar;
