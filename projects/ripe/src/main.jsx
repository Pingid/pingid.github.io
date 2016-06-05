import React from 'react';
import { render } from 'react-dom';

import Header from './Header/Header';
import Work from './Work/Work';

import './style.css';

const Page = () => (
  <div>
    <Header />
    <Work />
    <section className="footer">
      <div className="flex">
        <h4>About</h4>
        <h4>Contact</h4>
      </div>
      <small className="legal">© 2012-2016. All trademarks belong to their respective owners. All rights reserved.</small>
    </section>
  </div>
);

render(<Page />, document.getElementById('main'));
