/**
* Author: Ellery, Anika
* Created: 2 November
* License: Public Domain
*/

function sortUserName(username){
  var nameArray = username.split('');
  var nameArraySort = nameArray.sort()
  //join array back to a string
  var nameSorted = nameArraySort.join('-');
  return nameSorted;
};



var button = document.getElementById("button");
button.addEventListener("click", function(){
  //var getName = prompt ("What's your name?");
  var name = document.getElementById("form-field").value;
  var sortedname = sortUserName(name);
  var compName = sortedname.replaceAll('-', '');
  document.getElementById("output").innerHTML = compName;
  document.getElementById("name").innerHTML = sortedname;
  setTimeout(() => {
    document.getElementById("compliments").innerHTML = "That's a beeAAUUUTIFul name!"},1000);
});
