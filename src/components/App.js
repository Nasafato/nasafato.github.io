import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import MainPage from './MainPage';
import ProjectPage from './ProjectPage';
import CodePage from './CodePage';
import ThoughtsPage from './ThoughtsPage';

import { HashRouter, Match } from 'react-router';

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
      <HashRouter>
        <div className="App">
          <Navbar handleMenuToggle={this.handleMenuToggle} menuOn={this.state.menuOn} />
          <div className={this.state.menuOn ? "cover cover-on" : "cover"}></div>
          <Header
            handleMenuToggle={this.handleMenuToggle}
            />
          <Match exactly pattern="/" component={MainPage} />
          <Match pattern="/projects" component={ProjectPage} />
          <Match pattern="/code" component={CodePage} />
          <Match pattern="/thoughts" component={ThoughtsPage} />
        </div>
      </HashRouter>
    )
  }
}

export default App;
