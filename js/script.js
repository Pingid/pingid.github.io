// On page load
$(window).load(columnHeight);

// On window resize
$(window).resize( function () {
    // Clear all forced column heights before recalculating them after window resize
    $("#primary").css("height", "");  
    $("#secondary").css("height", "");
    $("#tertiary").css("height", "");
    columnHeight();
});

// Make columns 100% in height
function columnHeight() {
    // Column heights should equal the document height minus the header height and footer height
    var newHeight = $(document).height() - $(".site-header").height() - $(".site-footer").height() + "px";
    $("#primary").css("height", newHeight);
    $("#secondary").css("height", newHeight);
    $("#tertiary").css("height", newHeight);
}

$(document).ready(function() {
	$("#travel").click(function(){
		
		$(".work").addClass("position")
		$(".projects").addClass("position")
		$(".travel").removeClass("position")
	})
})

$(document).ready(function(){
	$("#work").click(function(){

		$(".projects").addClass("position")
		$(".travel").addClass("position")
		$(".work").removeClass("position")
	})
})

$(document).ready(function(){
	$("#projects").click(function(){

		$(".work").addClass("pos")
		$(".travel").addClass("pos")
		$(".projects").removeClass("pos")
	})
})