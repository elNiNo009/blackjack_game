
let firstcard=6
let secondcard=1

let sum=firstcard+secondcard
let message=""
console.log(sum)
let messageEl=document.getElementById("message-el")
function startGame()
{
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
//messageEl.textContent=
 //console.log(message)
