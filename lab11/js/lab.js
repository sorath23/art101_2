/**
* Author: Ellery, Anika
* Created: 2 November
* License: Public Domain
*/

$('input[type="submit"]').click(function(){
    $('input[type="submit"].pink').removeClass('pink')
        $(this).addClass('pink');
});

document.addEventListener('DOMContentLoaded', function() {
    var button = document.createElement('button');
    button.type = 'button';
    button.innerHTML = 'Press me';
    button.className = 'btn-styled';

    button.onclick = function() {
        // …
    };

    var container = document.getElementById('container');
    container.appendChild(button);
}, false);


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
