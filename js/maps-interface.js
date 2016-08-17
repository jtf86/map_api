// var apiKey ="AIzaSyCJxNyV0FOTUFGQiRMErgGOFbmbOm64fhs";

var Map=require("./../js/maps.js").mapsModule;
var apiKey = require('./../.env').apiKey;


function initMap() {
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
    center: {lat: 51.477, lng: 0},
    zoom: 19
  });
}



$(document).ready(function(){
  console.log("APP.JS WORKS");
  initMap();
  $("#input-form").click(function(){
    var city = ('#location').val();

  });

  $("#time").text(moment());

  // $(document).ready(function(){
  // });




  function update(){
    $("#clock").html(moment().format("D. MMMM YYYY H:mm:ss"));
  }
  setInterval(update, 1000);


});
