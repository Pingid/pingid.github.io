// Changes colour of navigation menue to correspond to scroll position
function scrollNavColour(nav, newClass) {
  var distance = $('body').scrollTop();
  nav.forEach(function(text) {
    if (distance >= text.top && distance < text.bottom) {
      $(text.class).addClass(newClass)
    } else {
      $(text.class).removeClass(newClass)
    }
  })
}
function clickScroll(nav) {
  $('.menu').on('click', function(e) {
    var className = e.target.className.split(' ').shift();
    nav.forEach(function(item) {
      console.log(className, item.class.split('').slice(1).join(''));
      if(className === item.class.split('').slice(1).join('')) {
        $('html, body').animate({
            scrollTop: item.top
        }, 400);
      }
    })
  })
}

var navs = [
  {class: '.nav-intro', top: 0, bottom: 250},
  {class: '.nav-hopyard', top: 250, bottom: 1610},
  {class: '.nav-night-tails', top: 1610, bottom: 2800},
  {class: '.nav-outlook', top:2800, bottom: 10000}
]

scrollNavColour(navs, 'nav-scroll');
$(window).scroll(function() {
  scrollNavColour(navs, 'nav-scroll');
})

clickScroll(navs)
