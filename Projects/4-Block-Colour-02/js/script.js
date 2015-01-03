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

  $("grid").click(function(){
    changeState();
  })


  $(".grid:nth-child(1)").mouseenter(function(){
    $(this).css('top','0')
  })



}


$("#bottom-right")
  .on( "mouseenter", function() {
    $( this ).css({
      "bottom": "0",
      "right": "0"
    });
  })
  .on( "mouseleave", function() {
    $( this ).css({
      "bottom": "-40vh",
      "right": "-40vw"
    });
  });



  // $("#top-left").mouseenter(function() {
  //   $(this).toggleClass("open");
  //   $("#bottom-left, #bottom-right").toggleClass('bottom-closed');
  //   $("#top-right").toggleClass("top-closed");
  // });
  // $("#top-right").mouseenter(function() {
  //   $(this).toggleClass("open");
  //   $("#bottom-left, #bottom-right").toggleClass('bottom-closed');
  //   $("#top-left").toggleClass("top-closed");
  // });
  // $("#bottom-left").mouseenter(function() {
  //   $(this).toggleClass("open");
  //   $("#top-left, #top-right").toggleClass('bottom-closed');
  //   $("#bottom-right").toggleClass("top-closed");
  // });
  // $("#bottom-right").mouseenter(function() {
  //   $(this).toggleClass("open");
  //   $("#top-left, #top-right").toggleClass('bottom-closed');
  //   $("#bottom-left").toggleClass("top-closed");
  // });