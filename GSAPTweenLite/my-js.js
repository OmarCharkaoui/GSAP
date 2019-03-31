$(document).ready(function(){

/*-------------------------------TweenLite.to()---------------------------------------*/
var tween = document.getElementsByClassName('tween1');

var play1 = TweenLite.to(tween , 2 , {width:100 , height:100 , backgroundColor:"#ff0000",paused:true } ); /* you need Cssplugin to be included to work with property css */

$('.play-1').click(function(){
    play1.restart();
});


/* By default, tweens begin immediately


*/
/* The target can also be an array of objects. */

targetgr=TweenLite.to( ['.tween2','.tween3','.tween4'], 3 , {opacity:0.8 , rotation:360 , x:600,paused:true });
$('.play-2').click(function(){
    targetgr.restart();
});

/*-------------------------TweenLite.from()-----------------------------------------*/

/* tween if you want to define the starting values instead of the ending values 
    so that the target tweens from the defined values to wherever they currently are. */

    tweenliteFrom = TweenLite.from('.twennfrom1',5,{opacity:0 , rotation:360 , x:700,paused:true});

    $('.play-3').click(function(){
        tweenliteFrom.restart();
    });


/*-----------------------------------TweenLite.fromTo()----------------------------------------------*/

 tweenfromto =  TweenLite.fromTo('.tweenfromto' , 3 , {width:600 , opacity:0 },{width:100 , opacity:1,paused:true} ); /* From 500 to 10 */
$('.play-4').click(function(){
    tweenfromto.restart();
});


/*-----------------------------------------------------------------------------------------*/

/*
Although the to(), from(), and fromTo() static methods are popular
 because they're quick and can avoid some garbage collection hassles,
     you can also use the more object-oriented syntax like this:
var tween = new TweenLite(element, 2, {width:200, height:150});
or even:
var tween = TweenLite.to(element, 2, {width:200, height:150});

*/


/* ------------------------------Special properties, eases and callbacks (no plugins required):------------ */
/* ARE : autoCSS,callbackScope,delay,ease,immediateRender,lazy,onComplete,onCompleteParams,onCompleteScope,
           onOverwrite,onReverseComplete,onReverseCompleteParams,onReverseCompleteScope,
            onStart,onStartParams,onStartScope,onUpdate,onUpdateParams,onUpdateScope,
                overwrite,paused,useFrames

*/



/* -------------------------------------Function-based values------------------------------------------------------- */

 functionbased = TweenLite.to('.tweenx',3,{
x: function(){
return (Math.random() * 400);
},paused:true});

$('.play-5').click(function(){
    functionbased.restart();
   

});

/* Parameters: index, target */
/* index : position the element => 3 div / index 0 ; 1 ; 2 
  target : that element in this case the div 
*/
 funcMath= TweenLite.to('.tweeny',2,{
x:function(index,target) {
    console.log( "The Index "+index + " the target "+ target);
   return (index + 1) * 200; // 200 /400 /600  
},paused:true
});
$('.play-6').click(function(){
    funcMath.restart();
});
/* -------------------------------------------------------TweenLite Method--------------------- */
/*-----------------------------------------Delay */
var animation1 = TweenLite.to('.tween-delay',2,{x:300 , delay:3,paused:true});


console.log ( "the delay of animation 1 is "+ animation1.delay()); // get curent delay 3
animation1.delay(0);// set new delay
$('.play-7').click(function(){
    animation1.restart();
});

/* immediateRender:true default */

var animation2= TweenLite.from('.tween-from-delay-1',2 ,{x:800 , delay:2,immediateRender:true,paused:true   });
/* immediateRender:false */
var animation3= TweenLite.from('.tween-from-delay-2',2 ,{x:800 , delay:2, immediateRender:false,paused:true  });
console.log( "the delay of animation 3 is " + animation3.delay());
/* animation3.timeScale(3); */ /* Not changing the delay but affected  ( idont understing yet )  */
$('.play-8').click(function(){
    animation2.restart(true);
    animation3.restart(true);
});
/*--------------------------TweenLite.delayedCall()*/

 

/* Call this function after 3s  */


$('.play-9').click(function(){
TweenLite.delayedCall(3,myfunctiontocall,["Omar","24"]);
    function myfunctiontocall(name,age) { 
        $('.delaycall').text("My Name " + name + " My age " + age);
      
    }
    
});


/*---------------------------------------Duration() */

var animation5 = TweenLite.to('.duration',1,{x:600 , rotation:360,paused:true}); // curent duration

animation5.duration(5); //set duration

console.log( " the duration of animation5 is " + animation5.duration());

$('.play-10').click(function(){
   $('.durationyes').text(" the duration of current animation " + animation5.duration());
animation5.restart();


});


/*---------------------------------------.eventCallback() */

/*Gets or sets an event callback like "onComplete", "onUpdate", "onStart", "onReverseComplete"
     or "onRepeat" (onRepeat only applies to TweenMax or TimelineMax instances)   */


     var animation6 = TweenLite.to('.eventCallback',4,{rotation:360 , x:600,paused:true});
    
     function callbackfunction() {
        $('.toto').text('hey im finish the animation');
    }

animation6.eventCallback("onComplete") // get current onComplete 
/* The same */
/* TweenLite.to('.eventCallback',2,{rotation:360 , x:600, onComplete:callbackfunction}); */
$('.play-11').click(function(){
    
    animation6.play();
    animation6.eventCallback("onComplete",callbackfunction);
    

});

/*---------------------------------------.invalidate */


var animation7 = TweenLite.to('.invalidate',3,{x:"+=100" , rotation:"+=360",paused:true });

$('.restart').click(function () { 
   animation7.restart();
});
/* start from the last end point and + (X + 100, Rotation+360)  again*/
$('.Invalid').click(function () { 
    animation7.invalidate();
    animation7.restart();
});

/*---------------------------------------.isactive() */

var animation8 = TweenLite.to('.isactive',20,{x:800,rotation:360,paused:true});
var animation9 = TweenLite.to('.default',20,{x:800,rotation:360,paused:true});
$('.restart-anim').click(function(){
    if(!animation8.isActive())
    {
        animation8.restart();

    }
});
$('.restart-default').click(function(){

    animation9.restart();


});
/*---------------------------------------.kill() */

 var animation10 = TweenLite.to('.kill',10,{ backgroundColor:'red', opacity:.8 , x:900,rotation:360,paused:true });

/* 
  Kills the animation entirely or in part depending on the parameters.
 */
$('.play-first').click(function(){animation10.restart();})
$('.Kill-btn').click(function(){
    animation10.kill();
});
$('.Kill-btn-1').click(function(){

    animation10.kill({backgroundColor:true});

});
$('.Kill-btn-2').click(function(){

    animation10.kill({rotation:true});

});
$('.Kill-btn-3').click(function(){

    animation10.kill({x:true});

});
/*---------------------------------------.TweenLite.killDelayedCallsTo()*/

 
TweenLite.delayedCall(3,myfunctionNow);
function myfunctionNow () {
    $('.write-here').text(" Im End the animation");
  }

/* .TweenLite.killDelayedCallsTo() */

$('.Kill-delay-calls').click(function(){

    TweenLite.killDelayedCallsTo(myfunctionNow);
});

/*---------------------------------------.pause()*/

var animation11 = TweenLite.to('.pause-1',5,{x:600 , rotation:360,paused:true});
$('.play-btn').click(function(){animation11.play();});
$('.pause-btn').click(function(){animation11.pause();});
$('.pause-jump-btn').click(function(){animation11.pause(2);});
$('.restart-btn').click(function(){animation11.restart()});
$('.paused-btn').click(function(){
    $('.curent-paused').text( "the Curent state is " +  animation11.paused());
});
$('.btn-progress').click(function(){
  $('.curent-progress').text("the Curent Progress is " + animation11.progress()); /* gets current progress */
});

/*---------------------------------------.reverse()*/

var animation12 = TweenLite.to('.reverse-box',5,{x:600 , rotation:360,paused:true});

$('.restart-btnn').click(function(){ 
    animation12.restart();
 })

$('.reverse-btn').click(function()
{
    animation12.reverse();
});
$('.reversed-btn').click(function(){

   $('.reserved-result').text( " current orientation of reversed() " + animation12.reversed());

});
/*---------------------------------------.seek()*/
var animation13 = TweenLite.to('.box-seek',5,{x:600 , rotation:360,paused:true});
$('.seek-btnnnn').click(function(){

    animation13.restart();

});
$('.seek-btn').click(function(){
    animation13.seek();
});

/*---------------------------------------.resume()*/
var animation14 = TweenLite.to('.box-resume',5,{x:600 , rotation:360,paused:true});


$('.resume-btn-play').click(function(){

    animation14.play();

});
$('.pause-btn-play').click(function(){

    animation14.pause();

});


$('.resume-btn').click(function(){

    animation14.resume();

});
/*---------------------------------------.TweenLite.set()*/



$('.TweenLite-btn-play').click(function(){

    TweenLite.set('.set-box',{x:400});

    /* same as */
    /* TweenLite.to('.set-box', 0, {x:400}); */

});
/*---------------------------------------.startTime()*/

var animation15 = TweenLite.to('.start-time' ,3,{ x:400 , rotation:320 , paused:true});

$('.startTimeee-btn-play').click(function(){
    animation15.restart();
});

$('.startTime-btn-play').click(function(){
    $('.currentTime').text(animation15.startTime());
});

/*---------------------------------------.time()*/
var animation16 = TweenLite.to('.time-box-c' ,3,{ x:400 , rotation:-90 , paused:true});

$('.time-btn-play').click(function(){
    animation16 .restart();
})
$('.time-current-btn-play').click(function(){
   $('.get-time-from').html(animation16.time());
})

/*---------------------------------------.timeScale()*/
var animation17 = TweenLite.to('.time-scale-box',10,{x:900,rotation:360,paused:true});

$('.time-scale-btn-play').click(function(){

    animation17.restart();

});
$('.time--scale-current-btn-play').click(function(){

   var re = animation17.timeScale();

   $('.resu').text("the time scale of that animation is " + re);

});
$('.time--scale1-current-btn-play').click(function(){

    animation17.timeScale(0.5);

});
$('.time--scale2-current-btn-play').click(function(){

    animation17.timeScale(2);

});














});












/* Idont cover 
    .endTime()
    TweenLite.getTweensOf()
    TweenLite.killDelayedCallsTo()
    TweenLite.lagSmoothing()
    TweenLite.render()
    .totalDuration()
    .totalProgress()
    .totalTime()
https://css-tricks.com/lodge/svg/30-converting-raster-vector/

*/