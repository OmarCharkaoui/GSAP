$(document).ready(function(){

/*----------------------------------------------------------------------*/

/* without-timeline */

$('.play-animation-1').click(function(){
    TweenLite.to('.without-timeline', 1, {x:100});
    TweenLite.to('.without-timeline', 1, {y:50, delay:1});
    TweenLite.to('.without-timeline', 1, {opacity:0, delay:2});
});

/* With TimeLine */
var timeLine1 = new TimelineLite();

$('.play-animation-2').click(function(){

    timeLine1.to('.timeline-1', 1, {x:100})

    .to('.timeline-1', 1, {y:50})

    .to('.timeline-1', 1, {opacity:0});


});

/*------------------------------------.add()----------------------------------*/


var timeLine2 = new TimelineLite({onComplete:myfunctionhello,paused:true});
timeLine2.to('.box-add-1',1,{rotation:360,x:500})
         .call(function_1)
         .to('.box-add-2',1,{rotation:360,x:500})
         .call(function_2)
         .to('.box-add-3',1,{rotation:360,x:500}) /* offset => "+=1" : means wait 1 second before start" */
         .call(function_3)
         /* .add(myfunctionhello,2) /* add calback at 2 second  */ 
         
          $('.play-animation-3').click(function(){timeLine2.play();});

function myfunctionhello(){$('.kiki').text("ALL Animation End");}
function function_1(){$('.function-1').text('the First Box Finish ');}
function function_2(){$('.function-2').text('the Second Box Finish ')}
function function_3(){$('.function-3').text('the Third Box Finish ')}

/*------------------------------------.from()----------------------------------*/

var timeLine3 = new TimelineLite({paused:true,onComplete:myFunctionbb});
timeLine3.from('.dox-form-1',2,{x:500,opacity:.1,rotation:360,backgroundColor:'blue'});
timeLine3.from('.dox-form-2',2,{x:500,opacity:.1,rotation:360,backgroundColor:'blue'});
timeLine3.from('.dox-form-3',2,{x:500,opacity:.1,rotation:360,backgroundColor:'blue'});

$('.play-animation-4').click(function(){
timeLine3.play();
});
function myFunctionbb(){
    $('.koko').text('Animation End');
}



/*----------------------------------Svg------------------------------------------------------ */


var path1 = document.getElementById("path-1");
var path2 = document.getElementById("path-2");
var path3 = document.getElementById("path-3");
var path4 = document.getElementById("path-4");

/* CSSPlugin.defaultTransformPerspective = 500; */
/* Svg --omar-- */
var svg = new TimelineLite({paused:true});

svg.fromTo(path1,1,{strokeDashoffset: function(){return path1.getTotalLength()},strokeDasharray:function(){return path1.getTotalLength()}},{strokeDashoffset:0})
    .set(path1,{fill:'red',ease:Back.easeIn.config(1.7)})
   .fromTo(path2,1,{strokeDashoffset: function(){return path2.getTotalLength()},strokeDasharray:function(){return path2.getTotalLength()}},{strokeDashoffset:0,})
   .set(path2,{fill:"green",ease:Back.easeIn.config(1.7)})
   .fromTo(path3,1,{strokeDashoffset: function(){return path3.getTotalLength()},strokeDasharray:function(){return path3.getTotalLength()}},{strokeDashoffset:0,})
   .set(path3,{fill:"orange",ease:Back.easeIn.config(1.7)})
   .fromTo(path4,1,{strokeDashoffset: function(){return path4.getTotalLength()},strokeDasharray:function(){return path4.getTotalLength()}},{strokeDashoffset:0,})
   .set(path4,{fill:"black",ease:Back.easeIn.config(1.7)})
   .staggerTo([path1, path2, path3, path4], 1.5, {rotation:360,svgOrigin:"100 100"}, 0.50);

   
   $('.btn-svg').click(function(){
    svg.restart();
});

/* svg -- to be continued */
 
var path_1 = document.getElementById('path1');
var path_2 = document.getElementById('path2');
var path_3 = document.getElementById('path3');
var path_4 = document.getElementById('path4');
var path_5 = document.getElementById('path5');
var path_6 = document.getElementById('path6');
var path_7 = document.getElementById('path7');
var path_8 = document.getElementById('path8');
var path_9 = document.getElementById('path9');
var path_10 = document.getElementById('path10');
var path_11 = document.getElementById('path11');
var path_12 = document.getElementById('path12');
var path_13 = document.getElementById('path13');
/*  console.log(path1.getTotalLength()); */
CSSPlugin.defaultTransformPerspective = 500;
var svg_to_contined = new TimelineLite({paused:true});

svg_to_contined.fromTo(path_1,1,{strokeDashoffset: function(){return path_1.getTotalLength()},strokeDasharray:function(){return path_1.getTotalLength()}},{strokeDashoffset:0})
.set(path_1,{fill:'red',ease:Back.easeIn.config(1.7)})
svg_to_contined.fromTo(path_2,1,{strokeDashoffset: function(){return path_2.getTotalLength()},strokeDasharray:function(){return path_2.getTotalLength()}},{strokeDashoffset:0})
.set(path_2,{fill:'red',ease:Back.easeIn.config(1.7)})
svg_to_contined.fromTo(path_3,1,{strokeDashoffset: function(){return path_3.getTotalLength()},strokeDasharray:function(){return path_3.getTotalLength()}},{strokeDashoffset:0})
.set(path_3,{fill:'red',ease:Back.easeIn.config(1.7)})

svg_to_contined.fromTo(path_4,1,{strokeDashoffset: function(){return path_4.getTotalLength()},strokeDasharray:function(){return path_4.getTotalLength()}},{strokeDashoffset:0})
.set(path_4,{fill:'red',ease:Back.easeIn.config(1.7)})
svg_to_contined.fromTo(path_5,1,{strokeDashoffset: function(){return path_5.getTotalLength()},strokeDasharray:function(){return path_5.getTotalLength()}},{strokeDashoffset:0})
.set(path_5,{fill:'red',ease:Back.easeIn.config(1.7)})

svg_to_contined.fromTo(path_6,1,{strokeDashoffset: function(){return path_6.getTotalLength()},strokeDasharray:function(){return path_6.getTotalLength()}},{strokeDashoffset:0})
.set(path_6,{fill:'red',ease:Back.easeIn.config(1.7)})
svg_to_contined.fromTo(path_7,1,{strokeDashoffset: function(){return path_7.getTotalLength()},strokeDasharray:function(){return path_7.getTotalLength()}},{strokeDashoffset:0})
.set(path_7,{fill:'red',ease:Back.easeIn.config(1.7)})

svg_to_contined.fromTo(path_8,1,{strokeDashoffset: function(){return path_8.getTotalLength()},strokeDasharray:function(){return path_8.getTotalLength()}},{strokeDashoffset:0})
.set(path_8,{fill:'red',ease:Back.easeIn.config(1.7)})
svg_to_contined.fromTo(path_9,1,{strokeDashoffset: function(){return path_9.getTotalLength()},strokeDasharray:function(){return path_9.getTotalLength()}},{strokeDashoffset:0})
.set(path_9,{fill:'red',ease:Back.easeIn.config(1.7)})

svg_to_contined.fromTo(path_10,1,{strokeDashoffset: function(){return path_10.getTotalLength()},strokeDasharray:function(){return path_10.getTotalLength()}},{strokeDashoffset:0})
.set(path_10,{fill:'red',ease:Back.easeIn.config(1.7)})
svg_to_contined.fromTo(path_11,1,{strokeDashoffset: function(){return path_11.getTotalLength()},strokeDasharray:function(){return path_11.getTotalLength()}},{strokeDashoffset:0})
.set(path_11,{fill:'red',ease:Back.easeIn.config(1.7)})

svg_to_contined.fromTo(path_12,1,{strokeDashoffset: function(){return path_12.getTotalLength()},strokeDasharray:function(){return path_12.getTotalLength()}},{strokeDashoffset:0})
.set(path_12,{fill:'red',ease:Back.easeIn.config(1.7)})

svg_to_contined.fromTo(path_13,1,{strokeDashoffset: function(){return path_13.getTotalLength()},strokeDasharray:function(){return path_13.getTotalLength()}},{strokeDashoffset:0})
.set(path_13,{fill:'red',ease:Back.easeIn.config(1.7)});


var array_twenns1 = [path_1, path_2];
var array_twenns2 = [ path_3, path_4];
var array_twenns3 = [path_5,path_6, path_7, path_8, path_9,path_10,path_11, path_12, path_13];

svg_to_contined.staggerTo(array_twenns1, 1.5, {rotation:360,fill:"blue",stroke:'none'}, 0.50);
svg_to_contined.staggerTo(array_twenns2, 1.5, {rotation:360,fill:"red",stroke:'none'}, 0.50);
svg_to_contined.staggerTo(array_twenns3, 1.5, {rotation:360,fill:"green",stroke:'none'}, 0.50);




$('.btn-svg-2').click(function(){svg_to_contined.play();});
$('.btn-svg-pause').click(function(){svg_to_contined.pause();});
$('.btn-svg-resume').click(function(){svg_to_contined.resume();});
$('.btn-svg-reverse').click(function(){svg_to_contined.reverse();});
$('.btn-svg-restart').click(function(){ svg_to_contined.restart(); })



});

