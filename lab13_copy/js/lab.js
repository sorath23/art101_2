/*
 * Author: Ellery Harrington
 * Created: November 15
 * License: Public Domain
 */

 maxInput = 4;

 // get the values from the webpage and write them in an object
 // this expects to have input fields with ids num0, text0, num1, text1, etc
 // returns an object that looks like this:
 //      {3: "Fizz", 4: "Buzz", 5: "Boom", 7: "Bang"}
   function getFactorObj() {
     var factorObj = {};
     for (var factor = 0; factor < maxInput; factor++) {
         numId = "num" + factor;
         textId = "text" + factor;
         numValue = document.getElementById(numId).value;
         textValue = document.getElementById(textId).value;
         console.log(factor + ") num:", numValue, "text:", textValue)
         // if either value is blank, don't use it
         if (numValue || textValue) {
             factorObj[numValue] = textValue;
         }
     }
     return factorObj;
   }

 function fizzBuzzBoom(maxNums, factorObj){
    for (var n = 0; n <= maxNums; n++){
      var outputStr = "";
      for(factor in factorObj){
        if(n % factor == 0){
          outputStr += factorObj[factor];
        }
      }
      // now if we have words in outputStr, format it like this " - FizzBuzz!"
      if(outputStr){
        outputStr = " - " + outputStr + "!";
      }
      console.log(outputStr);
      $("#output-2").append("<p>" + n + outputStr + "</p>");

    }
  }

document.getElementById("submit").addEventListener("click", function() {
    var max = document.getElementById("max").value;
    console.log("max:", max)
    if (! max) {
        reportError("You must provide a maxiumum number, for how long we should go for!");
          return;
    }
    var factorObj = getFactorObj();
    console.log("factorObj:", factorObj);
    if (Object.keys(factorObj).length === 0) {
        reportError("Oops! Be sure to fill out at least one number factor and variable!");
        return;
    }
    // clear error if there is one
    $("#output-2").html("");
    fizzBuzzBoom(max, factorObj);
    document.getElementById("output-2").classList.add("cols");
  })
