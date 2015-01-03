function hoverResize() {

  var state = false;

  function changeState() {
    if (state == false){
      state = true;
    }
    else {
      state = false;
    }
  }

  function enableResize() {
      $(this).addClass("open")
  }
  function disableResize() {
      $(this).removeClass("open")
  }



}






  $("#top-left").hover(function() {
    $(this).toggleClass("open");
    $("#bottom-left, #bottom-right").toggleClass('bottom-closed');
    $("#top-right").toggleClass("top-closed");
  });
  $("#top-right").hover(function() {
    $(this).toggleClass("open");
    $("#bottom-left, #bottom-right").toggleClass('bottom-closed');
    $("#top-left").toggleClass("top-closed");
  });
  $("#bottom-left").hover(function() {
    $(this).toggleClass("open");
    $("#top-left, #top-right").toggleClass('bottom-closed');
    $("#bottom-right").toggleClass("top-closed");
  });
  $("#bottom-right").hover(function() {
    $(this).toggleClass("open");
    $("#top-left, #top-right").toggleClass('bottom-closed');
    $("#bottom-left").toggleClass("top-closed");
  });