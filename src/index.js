import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory, Router, Route } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App';
import WalkingCanvas from './components/walker/WalkingCanvas';
import Blog from './components/blog/Blog';
import BlogPost from './components/blog/BlogPost';

import reducer, { addBlogPost } from './reducer';
import docLinks from '../content/docLinks';
import getUrl from './utils/getUrl';
import parseGDoc from './utils/parseGDoc';

import './index.css';

const store = createStore(reducer);

// Download blog posts
import posts from '../content/posts';
posts.map((post, index) => store.dispatch(addBlogPost(Object.assign({}, docLinks[index], post))))

// docLinks.map(({ src, date, textWrap, description, coverImage }) => {
//   const processHTML = HTML => {
//     const parsed = parseGDoc({ date, textWrap, description, coverImage, sections: [], }, HTML);
//     return store.dispatch(addBlogPost(parsed))
//   }
//   return setTimeout(() => getUrl(src, processHTML), 0);
// })

const render = () => ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App} />
      <Route path="/walking" component={WalkingCanvas} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:post" component={BlogPost} />
    </Router>
  </Provider>
), document.getElementById('root'));

render();

window.onresize = render;
