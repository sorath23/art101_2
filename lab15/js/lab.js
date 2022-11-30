/*
 * Author: Ellery Harrington
 * Created: November 15
 * License: Public Domain
 */
 var endpoint = "https://yesno.wtf/api";

 function getAPIData(){
 console.log("Running getAPIData")
 // go to numbers.api for data using AJAX
 $.ajax({
 // API endpoint
 url: endpoint,
 //any data to send
 //data: { id: 123},
 // POST or GET request
 type: "GET",
 //data type we expect back
 dataType: "json",
 })

 // If the request succeeds
 // Data is passed back
 .done(function(data){
 	console.log("Success:", data);
  var classVar;
  if (data.answer == 'yes'){
    classVar = 'yesAnswer'
  }
  if (data.answer == 'no'){
    classVar = 'noAnswer'
  }
  if (data.answer == 'maybe'){
    classVar = 'noAnswer'
  }
 	$("#output").append('<br><br><img src='+data.image+'>')
    .append('<p class='+classVar+'>'+data.answer.toUpperCase()+'</p>');
 })
 // If request fails
 .fail(function(request,error) {
 		console.log(request, error);
 	});
   }

 $("#ajax-button").click(getAPIData);
