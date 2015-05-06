var Page = React.createClass({
  render: function(){
    return (
      <div className="page-wrapper">
        <Scroller  />
        <Line />
      </div>
    )
  }
});
var Scroller = React.createClass({
  render: function(){
    return (
      <div className="scroller">
        <About />
        <Picture />
        <Projects />
      </div>
    )
  }
});
var Line = React.createClass({
  render: function(){
    return (
      <div className="line">

      </div>
    )
  }
});
var Picture = React.createClass({
  render: function(){
    return (
      <div className="image-wrapper">
        <img src="../img/me.png" />
      </div>
    )
  }
});
var About = React.createClass({
  render: function(){
    return (
      <div className="about">
        <p>
          London based Designer and developer Dan is best known for his intuitive clean Design.
          Dan retains a firm belief in Design that fulfiles a function
          never comprimising the User experience with indulging in unnecisery asthetics.
        </p>
      </div>
    )
  }
});
var Projects = React.createClass({
  render: function(){
    return (
      <div className="projects">
        <div className="title">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <h1>PROJECTS</h1>
        </div>
      </div>
    )
  }
});

React.render(<Page />, document.getElementById('main'));
// <p>
//   London based Designer and developer Dan is best known for his intuitive clean Design.
//   Dan retains a firm belief in Design that fulfiles a function
//   never comprimising the User experience with indulging in unnecisery asthetics.
// </p>
