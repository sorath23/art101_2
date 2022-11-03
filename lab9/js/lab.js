/**
* Author: Ellery
* Created: 30 October
* License: Public Domain
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
  document.getElementById("outputdiv").innerHTML = "Tнё gѳгдёп яцпё$ ѳf ѵагнаган аяё дё$тїпёд тѳ fагг, гїкё $тая$ аѫїд$т а ѫїдпїgнт cагѫ. Шнїгё тнё щѳягд яё$т$, ѳпё щїгг бяёак тнё $їгёпcё тѳ яёцпїтё тнёѫ агг.";
  var new3El = document.createElement('p')
  new3El.setAttribute('id', 'translation')
  setTimeout(() => {
    outputEl.appendChild(new3El);
  },3000);
  new3El.innerHTML = "It says...The golden runes of valhalah are destined to fall, like stars amidst a midnight calm. While the world rests, one will break the silence to reunite them all."
}
