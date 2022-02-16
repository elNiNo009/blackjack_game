




let message=""

let sum=0
let cards=[]


let hasBlackJack = false
let isAlive = false

let player = {
   name: "sarthak",
  chips: 145,
}

//
let messageEl=document.getElementById("message-el")
let sumEl=document.querySelector("#sum-el")
let cardEl=document.querySelector("#card-el")
let playerEl=document.getElementById("player-el")

playerEl.textContent=player.name + " : " + player.chips

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
   isAlive=true
   let firstcard=randomcard()
   let secondcard=randomcard()
    cards=[firstcard,secondcard]
    sum=firstcard+secondcard
   Game()
}


function Game()
{


  cardEl.textContent="Cards :"
  for (let i=0; i< cards.length; i++)
  {
    cardEl.textContent+= cards[i] + " "
  }
  sumEl.textContent="Sum : "+sum

if(sum<21)
{
  message="Please draw another card"
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
  if(isAlive === true && hasBlackJack ==false)
  {
let card=randomcard();
sum+=card
cards.push(card)
Game()
}
}
//messageEl.textContent=
 //console.log(message)
