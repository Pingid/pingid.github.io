$(function() {
    FastClick.attach(document.body);
});
$(".more-trigger").click(function() {
	if($(".more-text").hasClass("more-text-open")) {
		$(".more-text").removeClass("more-text-open");
		$(".more-trigger").text("more");
	} else {
		$(".more-text").addClass("more-text-open");
		$(".more-trigger").text("less");
	}
});

$('.project').click(function(e){
	var selectedProject = $(e.target);
	if(selectedProject.hasClass("pr1")) {
		expandProject(selectedProject.parents().parents().children(".pc1"), selectedProject);
	} else {
		expandProject(selectedProject.parents().parents().children(".pc2"), selectedProject);
	}

		function expandProject(elemWork, elemThumbnail) {
		if(elemWork.hasClass("content-open")) {
			elemWork.removeClass("content-open");
			elemThumbnail.removeClass("project-selected");

			$('body').scrollTo( '32%', 400);
		} else {
			$('.content-contain').removeClass('content-open');
			$('.project').removeClass("project-selected");

			elemWork.addClass("content-open");
			elemThumbnail.addClass("project-selected");

			$('body').scrollTo( '.content-contain', 400, {offset:-140} );
		}
	}
});

// Scroll to documentation is at http://demos.flesler.com/jquery/scrollTo/
$('header').click(function(e){
	var animationSpeed = 400
	if($(e.target).text() == "work"){
		$('body').scrollTo( '35.5%', animationSpeed);
	}
	else if($(e.target).text() == "team"){
		$('body').scrollTo( '75%', animationSpeed);
	}
	else if($(e.target).text() == "contact"){
		$('body').scrollTo('100%',animationSpeed);
	}
	else {
		$('body').scrollTo('0%',animationSpeed);
	}
});

$(document).ready(function(){
	$('.swiper-container').each(function(index, value){
		console.log(value);
		$(value).swiper({
		    mode:'horizontal',
		    loop: true,
		    autoplay: 4000
		  });  
	})
});

$(window).resize(function(){
	var projectWidth = $(".project").width();
	$('.row').css('height', projectwidth)
})










