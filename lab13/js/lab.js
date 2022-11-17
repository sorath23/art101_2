/*
 * Author: Ellery Harrington
 * Created: November 15
 * License: Public Domain
 */

maxFactors = 4;

outputEl = document.getElementById("output");

// get the values from the webpage and write them in an object
// this expects to have input fields with ids num0, text0, num1, text1, etc
// returns an object that looks like this:
//      {3: "Fizz", 4: "Buzz", 5: "Boom", 7: "Bang"}
function getFactorObj() {
    var factorObj = {};
    for (var factor=0; factor<maxFactors; factor++) {
        numId = "num" + factor;
        textId = "text" + factor;
        numValue = $("numId").value;
        textValue = $("numId").value;
        console.log(factor + ") num:", numValue, "text:", textValue)
        // if either value is blank, don't use it
        if (numValue && textValue) {
            factorObj[numValue] = textValue;
        }
    }
    return factorObj;
}

function outputToPage(str) {
    newEl = document.createElement("p");
    newEl.innerHTML = str;
    outputEl.appendChild(newEl);
}


function fizzBuzzBoom(maxNums, factorObj) {
    // iterate over all of out numbers
    for (var num=0; num<200; num++) {
        var outputStr = "";
        for (var factor in factorObj) {
            if (num % factor == 0) {
                outputStr += factorObj[factor];
            }
        }
        // now if we have words in outputStr, format it like this " - FizzBuzz!"
        if (outputStr) {
            outputStr = " - " + outputStr + "!";
        }
        outputToPage(num.toString() + outputStr)
    }
}

function reportError(str) {
    outputEl.innerHTML = "<div class='error'>" + str + "</div>";
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
    outputEl.innerHTML = "";
    fizzBuzzBoom(max, factorObj);
    outputEl.classList.add("cols");
})
