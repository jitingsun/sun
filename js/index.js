~function(b){function a(){var c=/([^?=&#]+)=([^?=&#]+)/g,d={};this.replace(c,function(){d[arguments[1]]=arguments[2]});return d}b.queryURLParameter=a}(String.prototype);var loadingRender=(function(){var c=["basketBall.jpg","basketballCourt.jpg","course.png","course1.png","course2.png","course3.png","course4.png","course5.png","course6.png","cube1.png","cube2.png","cube3.png","cube4.png","cube5.png","cube6.png","cubeTip.png","Email.png","phone.png","qq.png","return.png"];var a=$("#loading"),b=a.find(".progressBox");var e=0,d=c.length;return{init:function(){a.css("display","block");$.each(c,function(f,h){var g=new Image;g.src="img/"+h;g.onload=function(){e++;b.css("width",e/d*100+"%");g=null;if(e===d){if(page===0){return}window.setTimeout(function(){a.css("display","none");enterRender.init()},2000)}}})}}})();var M=document.querySelector("#M");var enterRender=(function(){var a=$("#enter"),b=a.children(".button"),d=b.children(".touch");function c(){a.css("display","none")}return{init:function(){a.css("display","block");d.singleTap(function(){b.css("display","none");c()});d.singleTap(c);cubeRender.init()}}})();var cubeRender=(function(){var e=$("#cube"),f=e.children(".cubeBox"),c=f.children("li");function d(i,h){return Math.abs(i)>30||Math.abs(h)>0}function g(i){var h=i.touches[0];$(this).attr({strX:h.clientX,strY:h.clientY,changeX:0,changeY:0})}function b(i){var h=i.touches[0];var k=h.clientX-$(this).attr("strX"),j=h.clientY-$(this).attr("strY");$(this).attr({changeX:k,changeY:j})}function a(j){var l=parseFloat($(this).attr("changeX")),k=parseFloat($(this).attr("changeY"));var i=parseFloat($(this).attr("rotateX")),h=parseFloat($(this).attr("rotateY"));if(d(l,k)===false){return}i=i-k/3;h=h+l/3;$(this).attr({rotateX:i,rotateY:h}).css("transform","scale(0.6) rotateX("+i+"deg) rotateY("+h+"deg)")}return{init:function(){e.css("display","block");f.attr({rotateX:-35,rotateY:45}).on("touchstart",g).on("touchmove",b).on("touchend",a);c.singleTap(function(){var h=$(this).index();e.css("display","none");swiperRender.init(h)})}}})();var swiperRender=(function(){var b=$("#swiper"),a=$("#makisu"),c=b.children(".return");function d(e){var g=e.slides,f=e.activeIndex;if(f===0){a.makisu({selector:"dd",overlap:0.6,speed:0.8});a.makisu("open")}else{a.makisu({selector:"dd",overlap:0.6,speed:0});a.makisu("close")}$.each(g,function(h,i){if(h===f){i.id="page"+(f+1);return}i.id=null})}return{init:function(f){b.css("display","block");var e=new Swiper(".swiper-container",{effect:"coverflow",onTransitionEnd:d,onInit:d});f=f||0;e.slideTo(f,0);c.singleTap(function(){b.css("display","none");$("#cube").css("display","block")})}}})();var urlObj=window.location.href.queryURLParameter(),page=parseFloat(urlObj.page);if(page===0||isNaN(page)){loadingRender.init()}if(page===1){enterRender.init()}if(page===3){cubeRender.init()}if(page==4){swiperRender.init(0)}document.addEventListener("touchmove",function(a){a.preventDefault()});