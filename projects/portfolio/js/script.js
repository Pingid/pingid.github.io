// var DanPortfolioSite = {}
// $.ajax({
//   url: "http://www.socketboard.io/endpoints/5651ad134460d60300796dcb/Page",
//   dataType: 'json'
// }).done(function(data) {
//   DanPortfolioSite = data;
//   React.render(<Page site={DanPortfolioSite}/>, document.getElementById('main'));
//   windowResize();
// });
var DanPortfolioSite = {
  "footer": {
    "email": "dm.beaven@gmail.com"
  },
  "content": {
    "about": [
      {
        "text": {
          "last": " and seeing the world.",
          "middle": ". I have an ever growing number of interests which currently includes reading about ",
          "first": "I grew up in a small town in south-east England. I harbour a great passion for action sports especially "
        },
        "word": "who"
      },
      {
        "text": "I am traveling around the world. So far I have spent two months in the Philippines traveling the islands and getting to know the people. After running low on funds, I traveled to Melbourne Australia where I am now working on my barista skills.",
        "word": "where"
      },
      {
        "text": "Please don’t hesitate to get in contact whether it is a request, comment or simply to chat. Best would be to send me an email, but you can also find me on Facebook, Github and code open.",
        "word": "how"
      }
    ],
    "experiments": [
      {
        "url": "experiments/physicsJS.html",
        "about": "A basic physics engine built with javascript and using html canvas to render",
        "instructions": "Click and drag to interact",
        "header": "Canvas experiment",
        "title": "physicsJS"
      },
      {
        "url": "http://s.codepen.io/pingid/debug/RPrLPw",
        "about": "A basic 3D rendering engine built in javascript and using html canvas to render",
        "instructions": "Click and drag to interact",
        "header": "Canvas experiment",
        "title": "3dJS"
      }
    ],
    "projects": [
      {
        "url": "http://www.citri.io",
        "header": "Citri*",
        "title": "citri",
        "styles": {
          "background": "#FAD46A",
          "color": "#D95C53"
        }
      },
      {
        "url": "http://www.cali-lew.com",
        "header": "Photography",
        "title": "cali",
        "styles": {
          "background": "#232323",
          "color": "white"
        }
      },
      {
        "url": "http://www.raph.getforge.io",
        "header": "Portfolio",
        "title": "Raph",
        "styles": {
          "background": "#EDEEEB",
          "color": "blue"
        }
      },
    ]
  },
  "front": {
    "frontText": "Hi, I am Dan, I create websites I am passionate about great design and relish the chance to collaborate with others."
  }
}

var Page = React.createClass({
  render: function(){
    return (
      <div className="page-wrapper">
        <Front content={this.props.site.front}/>
        <Content content={this.props.site.content}/>
        <Footer content={this.props.site.footer}/>
      </div>
    )
  }
})

var Front = React.createClass({
  getInitialState: function(){
    return {finalType: this.props.content.frontText.split(""), text: ""}
  },
  componentDidMount: function(){
      this.timer = setInterval(this.typeWrite, 50);
  },
  componentWillUnmount: function(){
    clearInterval(this.timer);
  },
  typeWrite: function(){
    var finalType = this.state.finalType
    var newText = this.state.text + finalType[0]
    if(finalType.length < 1) {
      this.setState({finalType: finalType})
    } else {
      this.setState({finalType: finalType.slice(1), text: newText})
    }
  },
  render: function(){
    var height = $(".text").height() || 400;
    var style = {top: (window.innerHeight/2)-height/2}
    return (
      <section className="front">
        <div className="text" style={style}>
          <p>{this.state.text}</p>
        </div>
      </section>
    )
  }
})

var Content = React.createClass({
  getInitialState: function(){
    return {
      navList: ["Projects", "Exper", "About"],
      name: 'projects',
      content: this.props.content.projects
    }
  },
  handleClickProj: function(){
    this.setState({
      navList: ["Projects", "Exper", "About"],
      name: 'projects',
      content: this.props.content.projects
    })
  },
  handleClickExper: function(){
    this.setState({
      navList: ["Proje", "Experiments", "About"],
      name: 'experiments',
      content: this.props.content.experiments
    })
  },
  handleClickAbout: function(){
    this.setState({
      navList: ["Proje", "Exper", "About"],
      name: 'about',
      content: this.props.content.about
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
        <Gallery name={this.state.name} content={this.state.content}/>
      </section>
    )
  }
});

var Gallery = React.createClass({
  render: function() {
    var name = this.props.name;
    if (name == "experiments") {
      var display = this.props.content.map(function(item) {
        return <Experiment item={item}/>
      })
    } else if (name === "about"){
      var display = this.props.content.map(function(item) {
        return (
          <About item={item}/>

        )
      })
    } else {
      var display = this.props.content.map(function(item) {
        return <Project item={item}/>
      })
    }
    return (
      <div className="gallery">
        {display}
      </div>
    )
  }
})

var Project = React.createClass({
  render: function(){
    var item = this.props.item;
    var boxClass = "box "+item.title;
    return (
      <a href={item.url} ><div style={item.styles} className="box"><h1>{item.header}</h1></div></a>
    )
  }
})

var Experiment = React.createClass({
  getInitialState: function(){
    return {coverStyle: {display: "block"}}
  },
  handleCoverClick: function(){
    this.setState({coverStyle: {display: "none"}})
  },
  render: function() {
    var item = this.props.item;
    var boxClass = "box "+item.title;
    return (
        <div className={boxClass}>
          <iframe src={item.url} frameborder="0" scrolling="no"></iframe>
          <div style={this.state.coverStyle} className="cover" onClick={this.handleCoverClick}>
            <div className="text">
              <p>{item.about}</p>
              <h2>{item.instructions}</h2>
            </div>
          </div>
        </div>
    )
  }
})

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
    var item = this.props.item;
    var sport = this.state.sports[this.state.sportNum];
    var reading = this.state.reading[this.state.readNum];
    var activity = this.state.activities[this.state.activNum];
    var display = function() {
      if(item.word == "who"){
        return (
          <div className="text">
            <p><span className="large">{item.word}</span>{item.text.first}<span className="dynamic">{sport}</span>{item.text.middle}<span className="dynamic">{reading}</span>, <span className="dynamic">{activity}</span>{item.text.last}</p>
          </div>
        )
      }else {
        return (
          <div className="text">
            <p><span className="large">{item.word}</span>{item.text}</p>
          </div>
        )
      }
    }
    return (
      <div className="about">
        {display()}
      </div>
    )
  }
})

var Footer = React.createClass({
  render: function(){
    var mail = "mailto:"+this.props.content.email+"?Subject=hello";
    return (
      <div className="footer">
        <div className="line">
          <a href={mail} target="_top">{this.props.content.email}</a>
        </div>
      </div>
    )
  }
})

for (var g = 0; g < 2; g++){
  React.render(<Page site={DanPortfolioSite}/>, document.getElementById('main'));
}
function windowResize(){
  return $(window).resize(function(){
    React.render(<Page site={DanPortfolioSite}/>, document.getElementById('main'));
  });
}