import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, } from 'react-router-dom';

import './styles/index.css';
import App from './App';

import registerServiceWorker from './utils/registerServiceWorker';

const render = () => ReactDOM.render((
  <Router>
    <Route path="/" component={App} />
  </Router>
), document.getElementById('root'));

render();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
