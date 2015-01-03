function ballTrack(ball, maxRadious) {
    // Calculates center of selected div
    var ballCenter = {
        X: $(ball).offset().left + parseInt($(ball).css('width')/2),
        Y: $(ball).offset().top + parseInt($(ball).css('height')/2)
    }
    // Linear movement maxRadious divided by diagonal screen size
    var movementConstant = maxRadious/(Math.pow((Math.pow(($(window).width()),2)+Math.pow(($(window).height()),2)),.5));
    // Add the calculated change in X axes & Y axes to selescted div 
    function moveBall(direction, change) {
        if(direction == "left") {
            $(ball).css(direction,change-parseInt($(ball).css('width'))/2)
        }
        else if (direction == "top"){
            $(ball).css(direction,change-parseInt($(ball).css('height'))/2)
        }
    }
    $(document).on('mousemove',function(event){
        var mouseX = event.pageX-ballCenter.X;
        var mouseY = event.pageY-ballCenter.Y;
        moveBall('left',movementConstant*mouseX);
        moveBall('top',movementConstant*mouseY)
    })
}

ballTrack('.ball', 90)




