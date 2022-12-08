"use strict";

//-->> DOM, IS THE STRUCTURED REPRESENTATION ,OF THE HTML
// DOCUMENTS, WHICH ALLOWS, THE JS TO ACCESS, HTML ,AND TO STYLE,THEM

// THE JS AND THE DOM, THE DOM ,IS NOT A PART OF, THE JS, IT COMES UNDER,THE CATEGORY, OF THE WEB APIS,
// WHILE JS IS OF THE ECMAM INTERNATIONAL ,WHILE, DOM ITS IMPLEMENTATION, METHODS, ARE THE PART, OF THE aPPLICATION PROGRAM INTERFACE

//-->> SO MTHIS, DOM OR THE WEB APIS, ARE ABLE, TO INTERACT WITH THE jS !!!!
//document.querySelector(".message").textContent = "Hello";
//document.querySelector(".number").textContent = 23;

//-->> since, there are two, buttons, so inorder, to differentiate, them,
//-->> we try, to take ,the class, name that differentiates them

//document.querySelector('.guess').value = 12;

//-->> since, buttons, are those kind, of the html ,eleemnts, that the user enters. so
//-->>>> we have to take the vALUE !!!!

//---->> EVENT LISTENERS, IN THE JS---->>

//-->> ITS THE METHOD, THAAT IS USUALLY, ADDEDB TO THE DOM,

//-->> sometimes, there might. be those, with the same classes, try,to use the part, which usually, differmtiates them!

//-->>> the secret number, must be defined, outide, since we only, declare, it once!!
//-->> so we use the random method

let secret = Math.floor(Math.random() * 20) + 1;

let highScore = 0;
  document.querySelector('.highscore').textContent = 0;
//-->> manuplating the things when the user presses, the again button
document.querySelector('.again').addEventListener('click',function(){
  // prompt("Retry the game!!")
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'Start Guessing ...';
  document.querySelector('.number').textContent = '?';
  secret= Math.floor(Math.random()*20) +1
  document.querySelector('body').style.backgroundColor = '#222';

  //-->>>  now, user,haad entered, something, in the box, so ,we try, to set that to the empty,string, its like restarting, it again!!
  document.querySelector('.guess').value =''

})
let scorer = 20;
let decre=20;
// document.querySelector(".number").textContent = secret;



if(scorer>0){
document.querySelector(".check").addEventListener("click", function () {
  //-->> since, the user input, type, is always, string , so ,we try, to
  //-->> convert, to the Number!!


  //-->> if the score reached zero we have to stop the game,

  //-->> which, indeed, tells, that we have, to continue, the game, if the score is greater than 0,
  //-->>so, what ever, the changes, that has to done, must be inside, the score greater, than zero!!



  //-->> all, might be using, the camel casing, even the use of the style, cases as well!!
//-->> SO, THE STYLING, THROUGH, THE JAVASCRIPT ,OF THE CSS, LIKE DOM CSS, THAT HAS TO BE DONE,USING THE CAMEL AND THE VALUES
//-->> MUST, BE GIVEN, THROUGH THE STRING, ONLY!!


//-->> WHAT EVER, THE STYLE, THAT WE APPLIED, TO THE BODY, USING, THE JS IS CONSIDERED, AS THE INLINE, STYLE, THAT IS ADDED ,THROUGH THE HTML!!


// --->>> 
  let guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if(scorer===1){
    document.querySelector('.message').textContent = "You!, lost the game 😭😭"
    document.querySelector('body').style.backgroundColor = "red";
  }
  if(scorer>0){
  if (!guess) {
    console.log("No Number is Entered!! 🏮");
  } else if (secret === guess) {
    let audio =  new Audio("C:\Users\thiru\OneDrive\Desktop\Thiwbin\Drum Kit Starting Files\sounds\crash.mp3");
     audio.play();
 if(highScore<=scorer){
   highScore = scorer;
   document.querySelector('.highscore').textContent = scorer;
 }
    console.log("You Entered the Correct NUmber!!😎😎");
    document.querySelector('.message').textContent = "You Won!! 😍😎😎"
    document.querySelector('body').style.backgroundColor = "green";
  } else if(guess>secret){
    scorer--;
    document.querySelector('.score').textContent = scorer;
      document.querySelector('.message').textContent = "You!, are  High 🐇 🐇"

  }else if(guess<secret){
    scorer--;
    document.querySelector('.score').textContent = scorer;
    document.querySelector('.message').textContent = "You!, are Low 🐢 🐢 🐢"
  }

}
});

}
