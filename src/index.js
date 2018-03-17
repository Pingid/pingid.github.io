import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './styles/index.css';

import App from './App';
import About from './components/About';
import Project from './components/Project';

import registerServiceWorker from './utils/registerServiceWorker';

const render = () => ReactDOM.render((
  <Router>
  	<div>
	  	<header>
				<Link to="/"><h5>Dan Beaven</h5></Link>
				<Link to="/about"><h5>About Dan</h5></Link>
			</header>
			<div className="m-head"></div>

	    <Route path="/" exact component={App} />
	    <Route path="/about" exact component={About} />
	    <Route path="/project/:name" component={Project} />
	  </div>
  </Router>
), document.getElementById('root'));

render();

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
