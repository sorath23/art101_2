/*
 * Author: Ellery Harrington
 * Created: November 29
 * License: Public Domain
 */


var URL = "https://xkcd.com/info.0.json";

// https://xkcd.com/json.html
// endpoint https://xkcd.com/456/info.0.json
var URLpre = "https://xkcd.com/";
var URLpost = "info.0.json";


function make_safe(str) {
  return str.replace(/'/g, '&apos;').replace(/"/g, '&quot;');
}

function getComic(num) {
  if (typeof num === 'undefined') {
    numStr = "";
  } else {
    numStr = num.toString() + "/";
  }
  var ourURL = URLpre + numStr + URLpost;
  console.log("Our new URL:", ourURL);

  $.ajax({

      url: ourURL,
      type: "GET",
      dataType : "json",
      success: function(comicObj) {
          console.log(comicObj);
      },
      error: function (jqXHR, textStatus, errorThrown) {
          console.log("Error:", textStatus, errorThrown);
      }
  })
  .done(function(data) {
      var imageUrl = data.img;

      var title = data.title;
      console.log("orig title:", title);
      title = make_safe(title);
      console.log("safe title:", title);
      var alt = data.alt;
      console.log("orig alt:", alt);
      alt = make_safe(alt);
      console.log("safe alt:", alt);
      var comicNum = data.num;
      var html = `<div id="imageblock">
          <h2>${title}</h2>
          <img src="${imageUrl}" title="${alt}"><br>
          <button id="prev">Previous</button><button id="next">Next</button>
        </div>
      $("#output").append("<p>" + comicObj.alt + "<p>");
      $("#output").html(html);

      $("#prev").click(function(){
        getComic(comicNum - 1);
        getAndPutData(num);
      });

      $("#next").click(function(){
        getComic(comicNum + 1);
        getAndPutData(num);
      });
  })
}

getComic();
