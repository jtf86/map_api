// var apiKey ="AIzaSyCJxNyV0FOTUFGQiRMErgGOFbmbOm64fhs";

var Map=require("./../js/maps.js").mapsModule;

function initMap() {
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
    center: {lat: 44.540, lng: -78.546},
    zoom: 8
  });
}



$(document).ready(function(){
  initMap();
  console.log("APP.JS WORKS");

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
