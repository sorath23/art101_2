/**
* Author: Anika, Ellery
* Created 18 October
* License: Public Domain
*/

// Define Variables
var myTransport = ["Ferrari 250 Spyder", "bike", "rides from friends", "Lime Scooter"];

console.log ("my Main Ride:", myMainRide);
var myMainRide = {
    make : "Ferrari",
    model : "250 Spyder",
    color : "Black",
    year : 1957,
    ownIt : 1,
    age : function() {
      return 2022 - age;
    }
}

// output
document.writeln("Kinds of transportation I use: ", myTransport, "</br");
document.writeln("my Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
