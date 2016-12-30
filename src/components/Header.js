import React from 'react';

class Header extends React.Component {


    render() {
        const menuBurger = (
            <div className="Header-menuBurger Header-child"
                role="button"
                onClick={this.props.handleMenuToggle}>
                <div className="Header-menuBurger-line l-01"></div>
                <div className="Header-menuBurger-line l-02"></div>
                <div className="Header-menuBurger-line l-03"></div>
                <div className="Header-menuBurger-line l-04"></div>
            </div>
        );
        const logo = (
            <div className="Header-logo Header-child">
                AG
            </div>
        );
        return (
            <div className="Header">
                {menuBurger}
                <div className="Header-spacer"></div>
                {logo}
            </div>
        )
    }
}

export default Header;
