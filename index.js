// let scoreHome = 0;
// let scoreAway = 0;

// document.getElementById("box").textContent = scoreHome;
// document.getElementById("box2").textContent = scoreAway;
// let homeScore = document.getElementById("box")
// let awayScore = document.getElementById("box2")

// function plusOne(){
//     scoreHome += 1
//     homeScore.textContent = scoreHome
// }
// function plusTwo(){
//     scoreHome += 2
//     homeScore.textContent = scoreHome
// }
// function plusThree(){
//     scoreHome += 3
//     homeScore.textContent = scoreHome
// }

// function onePlus(){
//     scoreAway += 1
//     awayScore.textContent = scoreAway
    
// }
// function twoPlus(){
//     scoreAway += 2
//     awayScore.textContent = scoreAway
// }
// function threePlus(){
//     scoreAway += 3
//     awayScore.textContent = scoreAway
// }

// function reset(){
//     homeScore.textContent = 0
//     awayScore.textContent = 0
//     scoreHome = 0
//     scoreAway = 0
// }
 let boxOneZero = 0
 let boxTwoZero = 0
 let zeroScore = 0
 let boxOnespace = document.getElementById("box")
 let boxTwoSpace = document.getElementById("box2")
 boxOnespace.textContent = boxOneZero
 boxTwoSpace.textContent = boxTwoZero
 let score = 0
 function plusOne(){
    boxOnespace.textContent = score += 1   
    
 }
 function plusTwo(){
    boxOnespace.textContent = score += 2
 }
 function plusThree() {
   boxOnespace.textContent = score += 3
 }
 function minusOne(){
     boxOnespace.textContent = score -= 1  
     if (boxOnespace.textContent < 0) {
        boxOnespace.textContent = score -= score
     } else {
      boxOnespace.textContent = score
     }
 }
  function minusTwo() {
    boxOnespace.textContent = score -= 2;
    if (boxOnespace.textContent < 0) {
      boxOnespace.textContent = score -= score
    } else {
      boxOnespace.textContent = score
    }
  }
   function minusThree() {
     boxOnespace.textContent = score -= 3;
     if (boxOnespace.textContent < 0) {
       boxOnespace.textContent = score -= score;
     } else {
       boxOnespace.textContent = score;
     }
   }

function onePlus(){
    boxTwoSpace.textContent = score += 1
    if (boxTwoSpace.textContent > 0) {
      boxTwoSpace.textContent = score;
    } else {
      boxTwoSpace.textContent = zeroScore;
    }
}
function twoPlus() {
  boxTwoSpace.textContent = score += 2
}
function threePlus() {
  boxTwoSpace.textContent = score += 3
}
function oneMinus() {
  boxTwoSpace.textContent = score -= 1;
  if (boxTwoSpace.textContent < 0) {
    boxTwoSpace.textContent = score -= score
  } else {
    boxTwoSpace.textContent = score
  }
}
function twoMinus() {
  boxTwoSpace.textContent = score -= 2;
   if (boxTwoSpace.textContent < 0) {
     boxTwoSpace.textContent = score -= score;
   } else {
     boxTwoSpace.textContent = score;
   }
}
function threeMinus() {
  boxTwoSpace.textContent = score -= 3;
   if (boxTwoSpace.textContent < 0) {
     boxTwoSpace.textContent = score -= score;
   } else {
     boxTwoSpace.textContent = score;
   }
}
function reset(){
    boxOnespace.textContent = zeroScore
    boxTwoSpace.textContent = zeroScore
    score = 0
}
