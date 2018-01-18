import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import { StyleRoot } from 'radium';

import './styles/index.css';
import App from './App';

import registerServiceWorker from './utils/registerServiceWorker';

const render = () => ReactDOM.render((
  <StyleRoot>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </StyleRoot>
), document.getElementById('root'));

render();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
