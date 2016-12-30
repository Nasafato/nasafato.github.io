import React from 'react';
// import '../css/Navbar.css';

class Navbar extends React.Component {
    render() {
      return (
        <nav className="Navbar">
        </nav>
      )
    }
}

Navbar.propTypes = {
    menuOn: React.PropTypes.bool.isRequired
}

export default Navbar;
