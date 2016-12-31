import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group' // ES6

// import '../css/Navbar.css';

class Navbar extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <nav>
                <ul className={this.props.menuOn ? 'Navbar Navbar-active' : 'Navbar Navbar-closed'}>
                    <li className="Navbar-goback">
                        <div onClick={this.props.handleMenuToggle} className="Navbar-closebutton">
                            <div className="Navbar-closebutton-l-01"></div>
                            <div className="Navbar-closebutton-l-02"></div>
                        </div>
                    </li>
                    <li className="Navbar-link">Projects</li>
                    <li className="Navbar-link">Code</li>
                    <li className="Navbar-link">Thoughts</li>
                </ul>
            </nav>
        )
    }
}

Navbar.propTypes = {
    menuOn: React.PropTypes.bool.isRequired,
    handleMenuToggle: React.PropTypes.func.isRequired
}

export default Navbar;
