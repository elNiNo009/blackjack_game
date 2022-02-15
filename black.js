
let firstcard=randomcard()
let secondcard=randomcard()
let cards=[firstcard,secondcard]

let hasBlackJack = false
let isAlive = true

let sum=firstcard+secondcard

let message=""

//
let messageEl=document.getElementById("message-el")
let sumEl=document.querySelector("#sum-el")
let cardEl=document.querySelector("#card-el")



function randomcard()
{
let num= Math.floor(Math.random()*13+1)
if(num===1)
return 11
else if(num===11 || num===12 || num===13)
return 10
else
return num
}

function startGame()
 {
Game()
}


function Game()
{
  sumEl.textContent="Sum : "+sum

  cardEl.textContent="Cards :"
  for (let i=0; i< cards.length; i++)
  {
    cardEl.textContent+= cards[i] + " "
  }

if(sum<21)
{
  message="Please Draw another card"
//  console.log("draw")
}
else if(sum==21)
{
  message="YOU WON THE GAME"
//  console.log("you won")
hasBlackJack = true
}
else
 {
   message="Bad Luck : You are out of the game"
//console.log("you out");
isAlive = false
}

messageEl.textContent=message
}



function newCard()
{
let card=randomcard();
sum+=card
cards.push(card)
Game()
}
//messageEl.textContent=
 //console.log(message)
