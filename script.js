// 'use strict';

// document.querySelector('.message').textContent='welcome to page';
// document.querySelector('.number').textContent=12;
const guessnumber=Math.trunc(Math.random()*20)+1;
//let  score=Number(document.querySelector('.score'))
let score=20;
let highscore =0;
document.querySelector('.number').textContent=guessnumber
document.querySelector('.check').addEventListener('click',function(){
  const guess=Number(document.querySelector('.guess').value);
if(!guess){
  document.querySelector('.message').textContent='😍 No number!'
}
else if(guessnumber===guess){
  document.querySelector('.message').textContent='😊 currect number';
  document.querySelector('body').style.background='green';
  document.querySelector('.number').style.width='30rem';
  if (highscore<=score){
    highscore=score
    document.querySelector('.highscore').textContent=highscore;
  }
  
}
else{
  if (guessnumber>guess){
     if(score>0){
    document.querySelector('.message').textContent='🥲 number is too low';
    score-=1;
    document.querySelector('.score').textContent=score;
  }
  else{
    document.querySelector('.body').style.background='red';
    document.querySelector('message').textContent='🥹 you lost the game'
  }
  }
 
  else{
    if(guessnumber<guess){
      if(score){
        //DocumentTimeline.querySelector()
        document.querySelector('.message').textContent='🥲 number is too high';
        score-=1
        document.querySelector('.score').textContent=score;
      }
      else{
        document.querySelector('.body').style.background='red';
        document.querySelector('.message').textContent=score;
      }
    }
    
  }

   
}
  
});


document.querySelector('.again').addEventListener('click',function(){
   let score =20;
   const guessnumber=Math.trunc(Math.random()*20)+1;
  document.querySelector('.number').textContent=guessnumber;
   document.querySelector('.score').textContent=score;
   document.querySelector('body').style.background='#222';
   document.querySelector('.number').style.width='15rem';
   document.querySelector('.message').textContent='start guessing.....'
  //console.log(score);
});
// document.addEventListener('DOMContentLoaded', (event) => {
//   document.querySelector('.again').addEventListener('click', function(){
//     score = 20;
//     // const guessnumber = Math.trunc(Math.random() * 20) + 1;
//     // document.querySelector('.number').textContent = guessnumber;
//     // document.querySelector('.score').textContent = score;
//     console.log(score);
//   });
// });
