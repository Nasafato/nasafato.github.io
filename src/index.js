import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Header from './components/Header';
import ProjectPage from './components/ProjectPage'
import { Match, Miss, HashRouter } from 'react-router';
import './css/style.css';


const Root = () => {
  return (
    <App />
  )
}

// render(<Root />, document.getElementById('root")'));
ReactDOM.render(
  <Root />,
  document.getElementById('root')
);