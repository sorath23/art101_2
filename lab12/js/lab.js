/**
* Author: Ellery, Anika
* Created: 10 November
* License: Public Domain
*/

//house sort function
function houseSort(name) {
  // get the length of name
  var length = name.length;''
  // get the modulus of name ( length mod 4)
  var mod = length % 4;
  // choose a house
  if (mod == 0){
    var house = "Griffendor"
  }
  else if(mod == 1) {
    var house = "Ravenclaw"
  }
  else if(mod == 2){
    var house = "Hufflepuff"
  }
  else {
    var house = "Slytherin"
  }
  return house;
}

// add a click handler for button
$("#sort").click(function(){
  // get input from field
  var name = $("#name").val();
  console.log("name:", name);
  // sort results
  var houseStr = houseSort(name);
  // output the result
  console.log("house:", houseStr);
  $("#output").html("Your house is " + houseStr);
})
