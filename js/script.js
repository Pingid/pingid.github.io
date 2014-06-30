$(document).ready(function() {
	$("#travel").click(function(){
		
		$(".work").addClass("pos")
		$(".projects").addClass("pos")
		$(".travel").removeClass("pos")
	})
})

$(document).ready(function(){
	$("#work").click(function(){

		$(".projects").addClass("pos")
		$(".travel").addClass("pos")
		$(".work").removeClass("pos")
	})
})

$(document).ready(function(){
	$("#projects").click(function(){

		$(".work").addClass("pos")
		$(".travel").addClass("pos")
		$(".projects").removeClass("pos")
	})
})

