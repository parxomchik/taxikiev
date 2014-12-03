var druzya = new google.maps.LatLng(50.456611, 30.604692);
var parliament = new google.maps.LatLng(50.456611, 30.604692);
var marker;
var map;

function initialize() {
  var mapOptions = {
    zoom: 15,
    center: druzya,
    draggable:true,
    scrollwheel:false,
    zoomControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    scaleControl: false,
    panControl: false
  };

function enableScrollwheel(map) {
    if(map) map.setOptions({ scrollwheel: true });
}

function disableScrollwheel(map) {
    if(map) map.setOptions({ scrollwheel: false });
}
    
    
  map = new google.maps.Map(document.getElementById('map-canvas'),
          mapOptions);

 var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var logoDruzya ="assets/img/maps-cursor.png";

    
  marker = new google.maps.Marker({
    map:map,
    draggable:false,
    icon: logoDruzya,
    animation: google.maps.Animation.DROP,
    position: parliament
  });
  google.maps.event.addListener(marker, 'click', toggleBounce);
}

function toggleBounce() {

  if (marker.getAnimation() != null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}
google.maps.event.addDomListener(window, 'load', initialize);