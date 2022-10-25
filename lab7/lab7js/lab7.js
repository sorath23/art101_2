/**
* Author: Anika, Ellery
* Created 24 October
* License: Public Domain
*/
console.log('hi')
function sortUserName() {
  var UserName = window.prompt("Are you ready to be re-born? What is your name now?")
  console.log("UserName =", UserName);
  //split string to array
  var nameArray = UserName.split('');
  console.log("nameArray =", nameArray)
  //sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  //join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  // Note that I could have done the above lines as a single line:
  //  userName.toLower()split("").sort().join("")
  return nameSorted;
}

//Output
document.writeln ("Welcome, little one. Your new name has been assigned. -- Hello, ",
  sortUserName(), "!</br>");
