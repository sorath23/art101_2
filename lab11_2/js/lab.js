/**
* Author: Ellery, Anika
* Created: 2 November
* License: Public Domain
*/

// add event listener to button
$("#my-button").click(function(){
  //toggle class of our div
  $(".hmu").toggleClass("special");
})

$(document).ready(function() {
    $('#output').append(
        $(document.createElement('button')).prop({
            type: 'button',
            innerHTML: 'Press me',
            class: 'btn-styled',
        })
    );
});

$(document).ready(function(){
  $("#output").click(function(){
    alert("The buttons was clicked.");
  });
});
