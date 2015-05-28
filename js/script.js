$(window).resize(function(){
  React.render(<Page />, document.getElementById('main'));
})

var ReactTransitionGroup = React.addons.CSSTransitionGroup;

var Page = React.createClass({
  render: function(){
    return (
      <div className="page-wrapper">
        <Front />
        <Content />
        <Footer />
      </div>
    )
  }
})

var Front = React.createClass({
  render: function(){
    var styleText = {fontSize: (window.innerHeight/190)+"rem"}
    return (
      <section className="front">
        <div className="padding">
          <div className="line-top">
          </div>
        </div>
        <div className="text" style={styleText}>
          <p>Hi, I am Dan, I create websites I am passionate about great design and relish the chance to collaborate with others.</p>
        </div>
        <div className="padding"><div className="line-bottom"></div></div>
      </section>
    )
  }
})

var Content = React.createClass({
  getInitialState: function(){
    return {
      navList: ['PROJECTS','EXPER..','ABOUT'],
      gallery: 1
    }
  },
  handleClickProj: function(){
    this.setState({
      navList: ['PROJECTS','EXPER..','ABOUT'],
      gallery: 1
    })
  },
  handleClickExper: function(){
    this.setState({
      navList: ['PROJE..','EXPERIMENTS','ABOUT'],
      gallery: 2
    })
  },
  handleClickAbout: function(){
    this.setState({
      navList: ['PROJE..','EXPER..','ABOUT'],
      gallery: 3
    })
  },
  render: function(){
    var state = this.state.gallery
    var gallery = function(){
      if(state == 1){
        return <Projects />
      }else if(state == 2){
        return <Experiments />
      }else if(state === 3){
        return <About />
      }
    }
    return (
      <section className="content">
        <div className="nav">
          <ul>
            <li onClick={this.handleClickProj}>{this.state.navList[0]}</li>
            <li onClick={this.handleClickExper}>{this.state.navList[1]}</li>
            <li onClick={this.handleClickAbout}>{this.state.navList[2]}</li>
          </ul>
        </div>
        <div className="gallery">
          {gallery()}
        </div>
      </section>
    )
  }
});
var About = React.createClass({
  getInitialState: function(){
    return {
      sports: ["surfing", "kitesurfing", "skating", "BMXing", "downhill", "wakeboarding", "windsurfing", "slackline"],
      reading: ["physics", "maths", "design", "coffee", "detectives"],
      activities: ["hand lettering", "sketching"],
      sportNum: 0,
      readNum: 0,
      activNum: 0
    }
  },
  componentDidMount: function(){
    this.timer = setInterval(this.tick, 6000);
  },
  componentWillUnmount: function(){
    clearInterval(this.timer);
  },
  tick: function(){
    this.setState({
      sportNum: Math.round(Math.random()*7),
      readNum: Math.round(Math.random()*4),
      activNum: Math.round(Math.random()*1)
    })
  },
  render: function(){
    var sport = this.state.sports[this.state.sportNum];
    var reading = this.state.reading[this.state.readNum];
    var activity = this.state.activities[this.state.activNum];
    console.log([this.state.sportNum,this.state.readNum,this.state.activNum]);

    return (
      <div className="about">
        <div className="text">
          <p><span className="large">Who</span>I grew up in a small town in south east England. I harbour a great passion for action sports especially <span className="dynamic">{sport}</span>. I have an ever growing number of interests which currently includes reading about <span className="dynamic">{reading}</span>, <span className="dynamic">{activity}</span> and seeing the world.</p>
        </div>
        <div className="text">
          <p><span className="large">Where</span>I am traveling around the world. So far I have spent two months in the Philippines traveling the islands and getting to know the people. After running low on funds I traveled to Melbouren Australia where I am now working on my barista skills.</p>
        </div>
        <div className="text">
          <p><span className="large">how</span>Please don’t hesitate to get in contact whether it is a request, comment or simply to chat. Best would be to send me an email but you can also find me on Facebook, github and codepen.</p>
        </div>
      </div>
    )
  }
})
var Experiments = React.createClass({
  getInitialState: function(){
    return {
      exp1: {display: "block", backgroundColor: "#232323"},
      exp2: {display: "block", backgroundColor: "#232323"}
    }
  },
  handleClickExp1: function(){
    this.setState({
      exp1: {display: "none"}
    })
  },
  handleClickExp2: function(){
    this.setState({
      exp2: {display: "none"}
    })
  },
  render: function(){
    return(
      <div className="experiments">
        <div className="experiment">
          <iframe src="experiments/Canvas-Physics.html" frameborder="0" scrolling="no"></iframe>
          <div className="cover" style={this.state.exp1} onClick={this.handleClickExp1}>
            <div className="text-wrapper">
              <p>A basic physics engine built with javascript and using html canvas to render</p>
              <h1>Click and drag here!</h1>
            </div>
          </div>
        </div>
        <div className="experiment">
          <iframe src="experiments/3D-JS.html" frameborder="0" scrolling="no"></iframe>
          <div className="cover" style={this.state.exp2} onClick={this.handleClickExp2}>
            <div className="text-wrapper">
              <p>A basic 3D rendering engine built in javascript and using html canvas to render</p>
              <h1>Click and drag here!</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
var Projects = React.createClass({
  render: function() {
    return (
      <div className="projects">
        <ProjCitri />
        <ProjCali />
      </div>
    )
  }
})

// ------------------------------------------------------------------------
var ProjCitri = React.createClass({
  getInitialState: function(){
    return {
      click: false
    }
  },
  handleClick: function(){
    var click = !this.state.click;
    this.setState({
      click: click
    })
  },
  render: function(){
    var state = this.state.click;
    var aboutText = "Nullam  risus eget urna mollis ornare vel eu leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
    var styles = {
      back: {background: "#dfdfdf"},
      title: {
        height: "12rem",
        color: "#D95C53",
        lineHeight: "30rem"
      },
      text: {
        width: "70%",
        paddingLeft: "15%",
        lineHeight: "2rem"
      },
      adress: {
      }
    }
    if(state) {
      styles.title.lineHeight = "15rem"
    }
    var slide = function(){
      if(state){
        return (
          <div style={styles.back}>
            <h1 style={styles.title}>Citri*</h1>
            <p style={styles.text}>{aboutText}</p>
            <a style={styles.adress} href="www.citri.io">citri.io</a>
          </div>
        )
      } else {
        return (
          <div style={styles.back}>
            <h1 style={styles.title}>Citri*</h1>
          </div>
        )
      }
    }
    return (
      <div className="proj-citri" onClick={this.handleClick}>
        <Project slide={slide()}/>
      </div>
    )
  }
})

// ---------------------------------------------------------------------------------
var ProjCali = React.createClass({
  getInitialState: function(){
    return {
      click: false
    }
  },
  handleClick: function(){
    var click = !this.state.click;
    this.setState({
      click: click
    })
  },
  render: function(){
    var state = this.state.click;
    var aboutText = "Nullam quis risus eget urna mollis ornare vel eu leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
    var styles = {
      back: {background: "#232323"},
      title: {
        height: "12rem",
        color: "#fdfdfd",
        lineHeight: "30rem"
      },
      text: {
        width: "70%",
        paddingLeft: "15%",
        lineHeight: "2rem"
      },
      adress: {
      }
    }
    if(state) {
      styles.title.lineHeight = "15rem"
    }
    var slide = function(){
      if(state){
        return (
          <div style={styles.back}>
            <h1 style={styles.title}>Photography</h1>
            <p style={styles.text}>{aboutText}</p>
            <a style={styles.adress} href="www.cali-lew.com">cali-lew.com</a>
          </div>
        )
      } else {
        return (
          <div style={styles.back}>
            <h1 style={styles.title}>Photography</h1>
          </div>
        )
      }
    }
    return (
      <div className="proj-cali" onClick={this.handleClick}>
        <Project slide={slide()}/>
      </div>
    )
  }
})

// ---------------------------------------------------------------------------------
var Project = React.createClass({
  render: function() {
    return (
      <div className="project">
        <ReactTransitionGroup transitionName="example" onClick={this.handle}>
          {this.props.slide}
        </ReactTransitionGroup>
      </div>
    )
  }
})

var Footer = React.createClass({
  render: function(){
    return (
      <div className="footer">
        <div className="line">
          <a href="mailto:dm.beaven@gmail.com?Subject=hello" target="_top">dm.beaven@gmail.com</a>
        </div>
      </div>
    )
  }
})


React.render(<Page />, document.getElementById('main'));
