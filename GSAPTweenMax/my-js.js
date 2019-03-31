$(document).ready(function(){

/*-------------------------------TweenMax.globalTimeScale() (CHange the timeScale for all in one click)---------------------------------------*/


var animation1 = TweenMax.to(['.box-1' , '.box-2' , '.box-3'],9,{x:500,rotation:360,paused:true});
$('.btn-play-global').click(function(){animation1.restart();});
$('.btn-curent-global').click(function(){TweenMax.globalTimeScale(3);});
/*-------------------------------TweenMax.isTweening()---------------------------------------*/
$('.btn-twenning').click(function(){
$('.resolta').text(TweenMax.isTweening(['.box-1' , '.box-2' , '.box-3']));});

/*-------------------------------TweenMax.killAll()---------------------------------------*/


function myfunction() {$('.titi').text(' heey Bro How are you ');}
CSSPlugin.defaultTransformPerspective = 400;
var animation2 = TweenMax.to('.box-killall','4',{x:400,rotationY:360,paused:true})

$('.btn-killAll').click(function(){ animation2.restart(); TweenMax.delayedCall(3 , myfunction ) });
$('.btn-killTweens').click(function(){ TweenMax.killAll();});

$('.btn-killTweens-Delay').click(function(){ 
    TweenMax.killAll(false,true,false);
 });

/*-------------------------------TweenMax.killDelayedCallsTo()---------------------------------------*/

function myfunction1() { $('.function-1').text(' => : This is from function 1')  };
function myfunction2() { $('.function-2').text(' => : This is from function 2')  };
function myfunction3() { $('.function-3').text(' => : This is from function 3')  };





$('.btn-kill-DelayedCallsTo').click(function(){

    TweenMax.delayedCall(3 , myfunction1 );
    TweenMax.delayedCall(3 , myfunction2 );
    TweenMax.delayedCall(3 , myfunction3 );
});
/* TweenMax.killDelayedCallsTo() */
$('.btn-kill-function-2').click(function(){TweenMax.killDelayedCallsTo(myfunction2);});
$('.btn-kill-function-3').click(function(){TweenMax.killDelayedCallsTo(myfunction3);})


/*-------------------------------.repeat()---------------------------------------*/

Animation3 = TweenMax.to('.repeat',3 , {rotationX:360 , x:500, paused:true});

$('.btn-play').on('click',function(){  Animation3.play()});

$('.btn-repeat').click(function(){
    Animation3.repeat(2);
   Animation3.restart();
});
/*-------------------------------TweenMax.staggerFrom()---------------------------------------*/

$('.btn-staggerFrom').click(function(){TweenMax.staggerFrom( ['.box-stagger-1' , '.box-stagger-2' , '.box-stagger-3'] , 5 , {x:900 , rotationX:360 }, 0.2 );});

$('.btn-staggerFrom-1 ').click(function(){

TweenMax.staggerFrom( ['.box-stagger-1' , '.box-stagger-2' , '.box-stagger-3'] , 5 ,
 {x:900 , rotationX:360, 
 stagger: 1 });

});
/*-------------------------------TweenMax.staggerTo()---------------------------------------*/


$('.btn-staggerFromTo').click(function(){

    TweenMax.staggerTo('.box-str div',1,{ scale: 0.1 ,y: 40, backgroundColor:'red', ease:Power1.easeInOut , repeat:1 , yoyo:true 
    ,stagger:{
        amount:1,
        from :'center',
        grid:'auto'
    }}
    );

});
/*-------------------------------.updateTo()---------------------------------------*/

 var Animation4 =  TweenMax.to('.box-update',3,{rotationX:300 ,x:499 ,  paused:true});

$('.btn-play').click(function(){
    Animation4.restart();
});
$('.btn-updateTo').click(function(){
    Animation4.updateTo( {rotation:360 ,y:50 } );
});
/*-------------------------------.yoyo()---------------------------------------*/
var Animation5 = TweenMax.to('.box-yoyo-0',3,{x:500,rotationY:360,paused:true});


$('.btn-play-animation-normal').click(function(){

    Animation5.restart();

});
$('.btn-repeat').click(function(){
    Animation5.repeat(2);
});

$('.btn-play-yoyo').click(function(){
Animation5.yoyo(true).repeat(2);


});


});





/* Idont cover in Tweenlite
    .endTime()
    TweenLite.getTweensOf()
    TweenLite.killDelayedCallsTo()
    TweenLite.lagSmoothing()
    TweenLite.render()
    .totalDuration()
    .totalProgress()
    .totalTime()


Svg => https://css-tricks.com/lodge/svg/30-converting-raster-vector/

*/
/* 
Idont cover in TweenMax
.endTime()
TweenMax.getAllTweens()
TweenMax.getTweensOf()
TweenMax.killChildTweensOf()
TweenMax.killTweensOf()
TweenMax.lagSmoothing()
.repeatDelay()
TweenMax.resumeAll()

*/