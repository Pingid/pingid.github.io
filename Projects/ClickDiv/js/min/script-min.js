function clickDiv(){function s(){return"#"+((1<<24)*Math.random()|0).toString(16)}function c(i,s){return Math.random()*(s-i)+i}function t(i,t){function a(i,s,c){$(i).css("top",event.pageY-c/2),$(i).css("left",event.pageX-s/2)}var n=c(100,400),d=c(100,400);$(i).css("width",n),$(i).css("height",d),$(i).css("background",s()),a(".click"+e,n,d)}var e=1;$("div").click(function(){alert("wowo");var s=$(this).attr("class"),c=$(s).css("background"),t=$(s).css("width"),e=$(s).css("height"),a="<div class="+s+"-1 id=shape-1></div><div class="+s+"-2 id=shape-2></div><div class="+s+"-3 id=shape-3></div><div class="+s+"-3 id=shape-4></div>";for($(s).css("background","transparent"),$(s).append(a),i=1;5>i;i++)$(s+"-"+i).css({background:c,position:"relative",width:t/2,height:elemHeight/2});$(s+"-2").css({left:t/2,top:"0"}),$(s+"-3").css({left:"0",bottom:"0"}),$(s+"-4").css({left:elemHeight/2,bottom:"0"})}),$(document).dblclick(function(){var i="<div class=click"+e+" id=shape></div>";$("body").append(i),t(".click"+e),e+=1})}clickDiv();