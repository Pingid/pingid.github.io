import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div className="about">
      <div className="image"><img src="img/me.jpg"/></div>
      <div className="text">
        <p>
          I grew up in a small town in south east England where I quickly learned that the internet was a wonderful window into the outside world. I studied fine art then design at school and it was a small step to channel those skills into the digital realm.
          <br /><br />
          It has always been of utmost importance to understand the tools that I use which has lead me for the past two years into software and front-end development. In this time I have developed a solid grasp of javascript and some of the libraries and frameworks.
          <br /><br />
          When it comes to design I place great value in form following function and try to live by Steve Job’s statement “Never let a passion for the perfect take precedence over pragmatism”.
        </p>
      </div>
    </div>
    )
  }
}
