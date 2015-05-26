function navInteract() {
  var mouseDowns = Kefir.fromEvents($('.nav'), 'mousedown');
  var mouseUps = Kefir.fromEvents($('li'), 'mouseup');

  mouseDowns.onValue(function(e){
    console.log(e);
  })
}
navInteract()
