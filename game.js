//alert("g");
var userClickedPattern=[];
var gamePattern=[];
var buttonColours=["red","yellow","blue","green"];
var level=0;
var p1=0;
var flag=false;


$(document).keydown(function(){
 if(flag==false){
    flag=true;
  nextSequence();
 }
});



$('.btn').click(function() {
    // alert("g");
    if(gamePattern.length==0){
    $("h1").text("Game Over Press Any Key to Restart");
    $("h2").text("");
    flag=false;
    level=0;
    p1=0;
    playSound('wrong');
    }
    else{
var userChosenColour = $(this).attr('id');
userClickedPattern.push(userChosenColour);
playSound(userChosenColour);
console.log(userClickedPattern);
if(gamePattern[p1]==userChosenColour){
    playSound(userChosenColour);
    p1++;
    if(p1==gamePattern.length){
        userClickedPattern=[];
        setTimeout(function(){
            console.log("wait time");
            
          },10000000);
        nextSequence();
        p1=0;
        //userClickedPattern=[];
    }
}
else{
    flag=false;
    level=0;
    p1=0;
    $("h1").text("Game Over Press Any Key to Restart");
    $("h2").text("");
    playSound('wrong');
    gamePattern=[];

}
    // $("h1").text("Game Ended");

}  
//animatePress(userChosenColour);
});



// function animatePress(currentColor){
//     console.log(currentColor);
//     $('.currentColor').addClass('pressed');

//     setTimeout(function(){
//         $('.currentColor').removeClass('pressed');
//     },10000);
// }



function playSound(name){
var audio = new Audio('sounds/'+name+'.mp3');
audio.play();
} 



function nextSequence(){
 level++;
 p1=0;
 $("h1").text('Level '+ level);
 setTimeout(function(){
   console.log("wait time");
   
 },10000000);
 var randomNumber=Math.floor(Math.random()*4);
 var randomChosenColor=buttonColours[randomNumber];
 gamePattern.push(randomChosenColor);
 $("h2").text('Current Color '+randomChosenColor);
 //console.log(randomChosenColor);
 playSound(randomChosenColor);
 //$("#randomChosenColor").addClass("pressed");

}