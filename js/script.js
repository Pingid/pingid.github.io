var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

function stringReduce(string) {
    var split = string.split("");
    delete split[Math.floor(Math.random()*string.length)]
    return split.join("")
}

var Page = React.createClass({
  getInitialState: function() {
    return {
      showing: "", 
      navClicks: 0,
      containerStyle: {display: "none"}, 
      fadeStyles: {opacity: 0, display: "none"}
    }
  },
  handleTransform: function() {
    this.setState({containerStyle: {display: "block"}})
  },
  handleFade: function() {
    this.fadeTimer = setInterval(this.fade, 0.20)
    this.setState({fadeStyles: {opacity: 1, display: "block"}})
  },
  fade: function() {
    if (this.state.fadeStyles.opacity <= 0.1) {
      clearInterval(this.fadeTimer)
      this.setState({fadeStyles: {opacity: 0, display: "none"}})
    }
    else if(this.state.navClicks <= 1){
      this.setState({fadeStyles: {opacity: this.state.fadeStyles.opacity - 0.012, display: "block"}})
    }
    else {
      this.setState({fadeStyles: {opacity: this.state.fadeStyles.opacity - 0.1, display: "block"}})
    }
  },
  handleNav1: function(){
    this.handleFade();
    this.setState({showing: <About />, navClicks: this.state.navClicks + 1});
  },
  handleNav2: function(){
    this.handleFade();
    this.setState({showing: <Projects />, navClicks: this.state.navClicks + 1});
  },
  handleNav3: function(){
    this.handleFade();
    this.setState({showing: <Doodles />, navClicks: this.state.navClicks + 1});
  },
  render: function(){
    var showing = this.state.showing;
    var fadeStyle = this.state.fadeStyles;
    return (
      <div className="page-wrapper">
        <Nav nav1={this.handleNav1} nav2={this.handleNav2} nav3={this.handleNav3} transform={this.handleTransform}/>
        <div className="fade-cover" style={fadeStyle}></div>
        <div className="content-wrapper" style={this.state.containerStyle}>
         {showing}
       </div>
      </div>
    )
  }
})

var Nav = React.createClass({
  getInitialState: function(){
    return {
      navPos: 50,
      lineWidth: 0,
      text: {
        part1: "Hello I am ",
        part2: " , feel free to check out some of the ",
        part3: " I have been involved with and the ",
        part4: " I make in my free time."
      },
      nav1Style: {color: "black", padding: "0rem"},
      nav2Style: {color: "black", padding: "0rem"},
      nav3Style: {color: "black", padding: "0rem"}
    }
  },
  handleNav1Click: function(){
    this.setState({nav1Style: {color: "black"},nav2Style: {},nav3Style: {}})
    if(this.state.navPos > 40){this.handleNavClick()}
    this.props.nav1();
  },
  handleNav2Click: function(){
    this.setState({nav1Style: {},nav2Style: {color: "black"},nav3Style: {}})
    if(this.state.navPos > 40){this.handleNavClick()}
    this.props.nav2();
  },
  handleNav3Click: function(){
    this.setState({nav1Style: {},nav2Style: {},nav3Style: {color: "black"}})
    if(this.state.navPos > 40){this.handleNavClick()}
    this.props.nav3();
  },
  handleNavClick: function(){
    this.handleNav();
    this.handleLine();
    this.handleText();
  },
  handleNav: function(){this.moveNavTimer = setInterval(this.moveNav, 0.01)},
  moveNav: function(){
    if(this.state.navPos <= 2){
      this.props.transform();
      clearInterval(this.moveNavTimer);
    } else {
      this.setState({navPos: this.state.navPos -1})
    }
  },
  handleLine: function(){this.lineMoveTimer = setInterval(this.moveLine, 0.01)},
  moveLine: function(){
    console.log("g")
    if(this.state.lineWidth >= 1000){
      clearInterval(this.lineMoveTimer);
    }else {
      this.setState({lineWidth: this.state.lineWidth + 20})
    }
  },
  handleText: function(){this.textReduceTimer = setInterval(this.textReduce, 0.01)},
  textReduce: function(){
    if(this.state.text.part2.length <= 0){
      clearInterval(this.textReduceTimer);
      this.setState({ text: { part1: "", part2: " ", part3: " ", part4: ""}})
    } else {
      this.setState({
        text: {
          part1: stringReduce(this.state.text.part1),
          part2: stringReduce(this.state.text.part2),
          part3: stringReduce(this.state.text.part3),
          part4: stringReduce(this.state.text.part4)
        }
      })
    }
  },
  render: function() {
    var wrapperStyle = this.state.navPos > 3 ? {top: this.state.navPos + "%"} : {paddingTop: this.state.navPos + "rem"}
    var lineStyle = {width: this.state.lineWidth + "px"}
    return (
      <div>
        <div className="nav-wrapper" style={wrapperStyle}>
          <h1>
            {this.state.text.part1}
            <span className="nav" onClick={this.handleNav1Click} style={this.state.nav1Style}>Dan</span>
            {this.state.text.part2}
            <span className="nav" onClick={this.handleNav2Click} style={this.state.nav2Style}>Projects</span>
            {this.state.text.part3}
            <span className="nav" onClick={this.handleNav3Click} style={this.state.nav3Style}>Doodles</span>
            {this.state.text.part4}
          </h1>
          <div className="line" style={lineStyle}></div>
        </div>
      </div>
    )
  }
})

var About = React.createClass({
  render: function(){
    return (
      <div className="about">
        <div className="image"><img src="img/meC.png"/></div>
        <div className="text"><p>Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Curabitur blandit tempus porttitor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p></div>
      </div>
    )
  }
})
var Projects = React.createClass({
  render: function(){
    return (
      <div className="projects">
        <Project />
        <Project />
      </div>
    )
  }
})
var Project = React.createClass({
  render: function() {
    return (
      <div className="project">
      </div>
    )
  }
})
var Doodles = React.createClass({
  render: function(){
    return (
      <div className="doodles">
        <div className="container">
          <Doodle style={ {width: "13rem", height: "8rem"} } />
          <Doodle style={ {width: "15rem", height: "7rem"} }/>
          <Doodle style={ {width: "16rem", height: "10rem"} }/>
          <Doodle style={ {width: "10rem", height: "13rem"} }/>
          <Doodle style={ {width: "9rem", height: "14rem"} }/>
          <Doodle style={ {width: "10rem", height: "10rem"} }/>
        </div>
      </div>
    )
  }
})
var Doodle = React.createClass({
  render: function() {
    return (
      <div className="doodle" style={this.props.style}>

      </div>
    )
  }
})

React.render(<Page site={DanPortfolioSite}/>, document.getElementById('main'));

var DanPortfolioSite = {
  front: {
    frontText: "Hello I am Dan, feel free to check out some of the Projects I have been involved with and the Doodles I make in my free time."
  },
  content: {
    projects: [
      {
        title: "citri",
        header: "Citri*",
        url: "http://www.citri.io"
      },
      {
        title: "cali",
        header: "Photography",
        url: "http://www.cali-lew.com"
      }
    ],
    experiments: [
      {
        title: "physicsJS",
        header: "Canvas experiment",
        instructions: "Click and drag to interact",
        about: "A basic physics engine built with javascript and using html canvas to render",
        url: "experiments/physicsJS.html"
      },
      {
        title: "3dJS",
        header: "Canvas experiment",
        instructions: "Click and drag to interact",
        about: "A basic 3D rendering engine built in javascript and using html canvas to render",
        url: "experiments/3dJS.html"
        }
    ],
    about: [
      {word: "who", text: {first: "I grew up in a small town in south east England. I harbour a great passion for action sports especially ", middle: ". I have an ever growing number of interests which currently includes reading about ", last: " and seeing the world."}},
      {word: "where", text: "I am traveling around the world. So far I have spent two months in the Philippines traveling the islands and getting to know the people. After running low on funds I traveled to Melbourne Australia where I am now working on my barista skills."},
      {word: "how", text: "Please don’t hesitate to get in contact whether it is a request, comment or simply to chat. Best would be to send me an email but you can also find me on Facebook, github and codepen."}
    ]
  },
  footer: {
    email: "dm.beaven@gmail.com"
  }
}

