import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import 'basscss/css/basscss.min.css';
import './styles/index.css';

import App from './App';
import About from './components/About';
import { Page as Publication } from './components/projects/Publication'
import { Page as SkynetKitchens } from './components/projects/SkynetKitchens'

import registerServiceWorker from './utils/registerServiceWorker';

const render = () => ReactDOM.render((
  <Router>
  	<div>
	  	<header>
				<Link to="/"><h5 className="caps">Dan Beaven</h5></Link>
				<Link to="/about"><h5 className="caps">About Dan</h5></Link>
			</header>
			<div className="m-head"></div>

	    <Route path="/" exact component={App} />
	    <Route path="/about" exact component={About} />
	    <Route path="/project/skynet-kitchens" component={SkynetKitchens} />
	    <Route path="/project/publication" component={Publication} />
	  </div>
  </Router>
), document.getElementById('root'));
render();

registerServiceWorker();
