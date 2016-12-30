import React from 'react';
import Navbar from './Navbar';
import MainPage from './MainPage';

class App extends React.Component {
    render() {
      return (
        <div className="page-wrapper">
          <Navbar />
          <MainPage />
        </div>
      )
    }
}

export default App;
