
function hoverActive() {
	$('li').hover(function(){
		var selected = "#" + $(this).attr('id');
		if($(selected).hasClass('open')){
			$(selected).siblings().removeClass('closed');
			$(selected).removeClass('open');
		}
		else {
			$(selected).siblings().removeClass('open').addClass('closed');
			$(selected).removeClass('closed').addClass('open');
		}
	});
}
hoverActive();


