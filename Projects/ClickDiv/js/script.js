function clickDiv() {

    function getRandomColor(){
        return "#"+((1<<24)*Math.random()|0).toString(16);
    }
    function getRandomArbitary (min, max) {
        return Math.random() * (max - min) + min;
    }
     function buildDiv(className,fill) {
        function locateDiv(className,width,height){
            $(className).css('top',event.pageY-height/2);
            $(className).css('left',event.pageX-width/2);
        }

        var randomWidth = getRandomArbitary(100,400);
        var randomHeight = getRandomArbitary(100,400);
        $(className).css('width',randomWidth);
        $(className).css('height',randomHeight);
        $(className).css('background',getRandomColor());  

        locateDiv(".click"+counter,randomWidth,randomHeight);
    }
    var counter = 1;
    $('div').click(function(){
        alert("wowo");
        var elemClass = $(this).attr('class');
        var background = $(elemClass).css('background');
        var elemWidth = $(elemClass).css('width');
        var elmHeight = $(elemClass).css('height')
        var div = 
        "<div class="+elemClass+"-1"+" id="+"shape-1"+"></div>"+
        "<div class="+elemClass+"-2"+" id="+"shape-2"+"></div>"+
        "<div class="+elemClass+"-3"+" id="+"shape-3"+"></div>"+
        "<div class="+elemClass+"-3"+" id="+"shape-4"+"></div>";
        $(elemClass).css('background', 'transparent');
        $(elemClass).append(div);
        for(i=1;i<5;i++){$(elemClass+"-"+i).css({
            'background':background,
            "position":"relative",
            'width':elemWidth/2,
            'height':elemHeight/2
            });
        }
        $(elemClass+"-2").css({'left':elemWidth/2,'top':"0"});
        $(elemClass+"-3").css({'left':'0','bottom':"0"});
        $(elemClass+"-4").css({'left':elemHeight/2,'bottom':"0"});
    });

    $(document).dblclick(function(){
        var div = "<div class="+"click"+counter+" id="+"shape"+"></div>";
        $('body').append(div);
        buildDiv(".click"+counter);
        counter = counter + 1;
    });

    
}
clickDiv();




