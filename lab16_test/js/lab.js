/**
 * Author:    Daphne Cheng
 * Created:   11.28.2022
 *
 **/

 var start = "https://xkcd.com/";
  var end = "/info.0.json";
  var num = "";
  var largest = 2704;

  function makeURL(int){
    //at end, back to start
    if (int > largest){
      int = 1;
    }else if (int < 1) {
      //at start, go to end
      int = 2704;
    }
   console.log("new url is " + start + int.toString() + end);
   return start + int.toString() + end;
   }

  function getAndPutData(int){
    //clearcontent("output");
    document.getElementById("output").innerHTML = "";
    console.log("cleared output");

    var newUrl = makeURL(int);
    console.log("getting new api");

    $.ajax({
        url: newUrl,
        type: "GET",
        dataType : "json",
        success: function(comicObj) {
            console.log(comicObj);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("Error:", textStatus, errorThrown);
        }
    })

    .done(function(comicObj) {
      //comic
      $("#output").append("<h3>" + comicObj.title + "<h3>");
      $("#output").append("<img src=" + comicObj.img + ">");
      $("#output").append("<p>" + comicObj.alt + "<p>");
      //prev and next buttons
      $("#output").append("<button id='prev' class='button-55'> prev </button>");
      $("#output").append("<button id='next' class='button-55'> next </button>");

      //event listner for next and prev
      $('#next').click(function(){
        console.log("next is clicked");
        num = comicObj.num + 1;
        getAndPutData(num);
      })

      $('#prev').click(function(){
        console.log("prev is clicked");
        num = comicObj.num - 1;
        getAndPutData(num);
      })
     })
  }

 //initial comic no num
  getAndPutData(num);
