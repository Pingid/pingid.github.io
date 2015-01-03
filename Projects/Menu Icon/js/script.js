
$(".navicon-container").click(function(){
  $(".navicon-button").toggleClass("open");

  if ($(".navicon-button").hasClass("open")){
    $('.nav-titles').addClass("shown");
  }
  else {
     $('.nav-titles').removeClass("shown");
  }
});

