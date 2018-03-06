import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, } from 'react-router-dom';

import './styles/index.css';
import App from './App';
import Project from './components/Project';
import Mouse from './components/Mouse';

import content from './content'

import registerServiceWorker from './utils/registerServiceWorker';

const render = () => ReactDOM.render((
  <Router>
  	<Mouse>
	    <Route path="/" exact component={App} />
	    <Route path="/project/:name" component={Project} />
	    <Route path="/me-image" component={() => <img src={require('./content/me.jpg')} />} />
	  </Mouse>
  </Router>
), document.getElementById('root'));

render();

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
