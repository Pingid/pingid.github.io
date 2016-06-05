import React from 'react';
import './header.css';

const Text = () => (
  <section className="header work">
    <h1 className="p1">Just Ripe</h1>
    <div className="flex flex-wrap">
      <div className="heading heading-text">
        <p>Mc Divens</p>
        <p>Multi-disciplinary Fooju</p>
      </div>
      <div className="heading heading-text">
        <p>My name is Joe Tsao. I am a multi-disciplinary designer currently based in the state of California. My biggest influences in design are the conversations I have with the people and objects around me. Below you will find an archive of a few of my favorite dialogues.</p>
      </div>
    </div>
  </section>
);

const Photo = () => (
  <section className="header">
    <h1>Just Ripe</h1>
    <div className="image"></div>
  </section>
);

export default Photo;
