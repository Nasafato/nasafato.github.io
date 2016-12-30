import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group' // ES6

// import '../css/Navbar.css';

class Navbar extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <CSSTransitionGroup
                className="Navbar"
                component="nav"
                transitionName="Navbar"
                transitionEnterTimeout={250}
                transitionLeaveTimeout={250}
                >
                <ul key="Navbar">
                    <li>Projects</li>
                    <li>Code</li>
                    <li>Thoughts</li>
                </ul>
            </CSSTransitionGroup>
        )
    }
}

Navbar.propTypes = {
    menuOn: React.PropTypes.bool.isRequired
}

export default Navbar;
