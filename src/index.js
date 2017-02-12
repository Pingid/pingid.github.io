import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory, Router, Route, IndexRoute } from 'react-router'

import App from './App';
import WalkingCanvas from './components/walker/WalkingCanvas';
import Blog from './components/blog/Blog';
import BlogPost from './components/blog/BlogPost';

import './index.css';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/walking" component={WalkingCanvas} />
    <Route path="/blog" component={Blog} />
    <Route path="/blog/:post" component={BlogPost} />
  </Router>
), document.getElementById('root'));
