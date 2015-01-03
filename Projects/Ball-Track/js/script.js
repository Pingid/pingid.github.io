function ballTrack(ball, maxRadious) {
    // Calculates center of selected div
    var ballCenter = {
        X: parseInt($(ball).offset().left),
        Y: parseInt($(ball).offset().top)
    }
    var ballPos = {
        left: parseInt($(ball).css('left')),
        top: parseInt($(ball).css('top'))
    }
    // Linear movement maxRadious divided by diagonal screen size
    var movementConstant = maxRadious/(Math.pow((Math.pow(($(window).width()),2)+Math.pow(($(window).height()),2)),.5));
    // Add the calculated change in X axes & Y axes to selescted div 
    $(document).on('mousemove',function(event){
        var calcX = movementConstant*(event.pageX-ballCenter.X+ballPos.left)+ballCenter.X;
        var calcY = movementConstant*(event.pageY-ballCenter.Y+ballPos.top)+ballCenter.Y;
        $(ball).offset({top: calcY, left: calcX});
    });
}

ballTrack('.ball', 90);


// $('.ball').click(function(){
//     $(this).offset({top: 100, left: 200});
//     console.log("great");
// })

