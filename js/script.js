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
    return (
      <section className="front">
        <div className="padding">
          <div className="line-top">

          </div>
        </div>
        <div className="text">
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
      active: [{display: 'block'},{height: '0', opacity: "0"},{display: 'none'}]
    }
  },
  handleClickProj: function(){
    this.setState({
      navList: ['PROJECTS','EXPER..','ABOUT'],
      active: [{display: 'block'},{height: '0', opacity: "0"},{display: 'none'}]
    })
  },
  handleClickExper: function(){
    this.setState({
      navList: ['PROJE..','EXPERIMENTS','ABOUT'],
      active: [{display: 'none'},{height: 'auto', opacity: "1"},{display: 'none'}]
    })
  },
  handleClickAbout: function(){
    this.setState({
      navList: ['PROJE..','EXPER..','ABOUT'],
      active: [{display: 'none'},{height: '0', opacity: "0"},{display: 'block'}]
    })
  },
  render: function(){
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
          <Projects active={this.state.active[0]}/>
          <Experiments active={this.state.active[1]} />
          <div className="about" style={this.state.active[2]}>3</div>
        </div>
      </section>
    )
  }
});

var Experiments = React.createClass({
  render: function(){
    return(
      <div className="experiments" style={this.props.active}>
        <div className="experiment">
          <iframe src="experiments/Canvas-Physics/index.html" frameborder="0" scrolling="no"></iframe>
        </div>
        <div className="experiment">
          <iframe src="experiments/3D-JS/index.html" frameborder="0" scrolling="no"></iframe>
        </div>
      </div>
    )
  }
})

var Projects = React.createClass({
  render: function() {
    return (
      <div className="projects" style={this.props.active}>
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
    var aboutText = "Nullam quis risus eget urna mollis ornare vel eu leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
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
        {this.props.slide}
      </div>
    )
  }
})

var About = React.createClass

var Footer = React.createClass({
  render: function(){
    return (
      <div className="footer">
        <div className="line">
          <a>dm.beaven@gmail.com</a>
        </div>
      </div>
    )
  }
})

React.render(<Page />, document.getElementById('main'));
