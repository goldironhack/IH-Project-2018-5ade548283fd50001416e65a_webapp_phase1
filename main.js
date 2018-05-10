var map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom : 10
  });
  var city = "New York";
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({'address' : city}, function(results,status){
    if(status == google.maps.GeocoderStatus.OK){
      map.setCenter(results[0].geometry.location);
    }
  });
}
