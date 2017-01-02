import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group' // ES6
import { Link } from 'react-router';

// import '../css/Navbar.css';

class Navbar extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <nav>
                <div className={this.props.menuOn ? 'Navbar Navbar-active' : 'Navbar Navbar-closed'}>
                    <ul className="Navbar-list">
                        <li className="Navbar-goback">
                            <div onClick={this.props.handleMenuToggle} className="Navbar-closebutton">
                                <div className="Navbar-closebutton-l-01"></div>
                                <div className="Navbar-closebutton-l-02"></div>
                            </div>
                        </li>
                        <li className="Navbar-list-item"><Link className="Navbar-link" to="/projects">Projects</Link></li>
                        <li className="Navbar-list-item"><Link className="Navbar-link" to="/code">Code</Link></li>
                        <li className="Navbar-list-item"><Link className="Navbar-link" to="/thoughts">Thoughts</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

Navbar.propTypes = {
    menuOn: React.PropTypes.bool.isRequired,
    handleMenuToggle: React.PropTypes.func.isRequired
}

export default Navbar;
