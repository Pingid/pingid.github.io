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
          London based designer and developer Dan is best known for his intuitive and clean design.
          Dan retains a firm belief in design that fulfils a function,
          never comprimising the user experience by indulging in unnecessary aesthetics.
        </p>
      </div>
    )
  }
});
var Projects = React.createClass({
  render: function(){
    return (
      <div className="projects-wrapper">
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
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <h1>PROJECTS</h1>
        </div>
        <div className='projects'>
          <div className='column'>
            <div className="upper-box">
              <h1><a href="www.citri.io">citr*</a></h1>
            </div>
            <div className="lower-box">
              <div className="pr-about">
                <p>
                  Fusce dapibus, tellus ac cursus commodo,
                  tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                  Sed posuere consectetur est at lobortis.
                </p>
              </div>
            </div>
          </div>
          <div className='column'>
            <h1><a href="www.cali-lew.com">Cali Photography</a></h1>
            <div className="pr-about">
              <p>
                Fusce dapibus, tellus ac cursus commodo,
                tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                Sed posuere consectetur est at lobortis.
              </p>
            </div>
          </div>
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
