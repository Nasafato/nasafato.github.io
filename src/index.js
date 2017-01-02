import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Header from './components/Header';
import ProjectPage from './components/ProjectPage'
import { Match, Miss, HashRouter } from 'react-router';
import './css/style.css';


const Root = () => {
  return (
    <HashRouter>
      <div>
        <Match exactly pattern="/" component={App} />
        <Match pattern="/projects" component={ProjectPage} />
      </div>
    </HashRouter>

  )
}

// render(<Root />, document.getElementById('root")'));
ReactDOM.render(
  <Root />,
  document.getElementById('root')
);