import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import MainPage from './MainPage';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      menuOn: false
    }

    this.handleMenuToggle = this.handleMenuToggle.bind(this);
  }

  handleMenuToggle() {
    console.log("Handling menu toggle");

    // turn menu on
    if (this.state.menuOn) {
      this.setState({ menuOn: false });
    } else {
      this.setState({ menuOn: true });
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar menuOn={this.state.menuOn} />
        <Header
          handleMenuToggle={this.handleMenuToggle}
          />
        <MainPage />
      </div>
    )
  }
}

export default App;
