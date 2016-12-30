import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter, Match, Miss } from 'react-router';
import './css/style.css';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={App} />
      </div>
    </BrowserRouter>

  )
}

// render(<Root />, document.getElementById('root")'));
ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
