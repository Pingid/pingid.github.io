$(document).ready(function() {
	$("#travel").click(function(){
		
		$(".work").addClass("pos")
		$(".sport").addClass("pos")
		$(".travel").removeClass("pos")
	})
})

$(document).ready(function(){
	$("#work").click(function(){

		$(".sport").addClass("pos")
		$(".travel").addClass("pos")
		$(".work").removeClass("pos")
	})
})

$(document).ready(function(){
	$("#sport").click(function(){

		$(".work").addClass("pos")
		$(".travel").addClass("pos")
		$(".sport").removeClass("pos")
	})
})
