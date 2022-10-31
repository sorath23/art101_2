/**
* Author: Anika, Ellery
* Created 25.11.2022
*
*/





var outputEl = document.getElementById("outputdiv");

var new1El = document.createElement("p");
new1El.setAttribute('id','cursivefont')
outputEl.appendChild(new1El);
new1El.innerHTML = "Lord help us...";


var new2El =
document.createElement("button")
new2El.innerHTML = "Decipher";
outputEl.appendChild(new2El);
new2El.onclick =
function p(){
  document.getElementById("outputdiv").innerHTML = "₮|-|ℹ$   ℿℿ∑$$@ⓖ∑   ℭ@ℿ   0ℿ⅂ℷ   lo∑   $∑∑ℿ   loℷ   †|-|∑   ℭ|-|0$∑ℿ   0ℿ∑$!!";
  var new3El = document.createElement('p')
  new3El.setAttribute('id', 'translation')
  setTimeout(() => {
    outputEl.appendChild(new3El);
  },3000);
  new3El.innerHTML = "It says...The golden runes of valhalah are destined to fall, like stars amidst a midnight calm. While the world rests, one will break the silence to reunite them all."
}
