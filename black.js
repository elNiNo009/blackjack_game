
let firstcard=randomcard()
let secondcard=randomcard()

let sum=firstcard+secondcard
let message=""
console.log(sum)
let messageEl=document.getElementById("message-el")
let sumEl=document.querySelector("#sum-el")
let cardEl=document.querySelector("#card-el")
let cards=[firstcard,secondcard]

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
  message="draw"
//  console.log("draw")
}
else if(sum==21)
{
  message="you won"
//  console.log("you won")

}
else
 {
   message="you out"
//console.log("you out");

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
