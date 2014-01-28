
define('gMaps', [
  'jquery',
  'Backbone',
  'appModel',
  'geoLocation'
],

function ($, Backbone, appModel, geoLocation) {

  "use strict";

  var GMaps = function () {};

  GMaps.prototype = {

    init : function () {
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "http://maps.googleapis.com/maps/api/js?key=" + appModel.get('urlParams').key + "&sensor=" + appModel.get('urlParams').sensor + "&callback=" + appModel.get('urlParams').callBack + "&libraries=" + appModel.get('urlParams').library;
      document.body.appendChild(script);
    },

    placeMarker : function (latLong, content) {

      var markerTitle = content && content.title || 'You are here',
          contentDescription = content && content.description || false;

      new google.maps.LatLng();

      // So that I can close unwanted windows
      appModel.set('infoWindow', null);

      var markerOptions = {
        position: latLong,
        map: appModel.get('gMap'),
        title:markerTitle,
        animation: google.maps.Animation.DROP
      };

      // var never used but could be reference to add to array for marker removal
      var marker = new google.maps.Marker(markerOptions);

      // If this isnt the users location, then add the news content
      if(contentDescription !== false) {

        google.maps.event.addListener(marker, 'click', function () {
          if (appModel.get('infoWindow')) {
            appModel.get('infoWindow').close();
          }
          var infoWindow = new google.maps.InfoWindow();
          infoWindow.setContent(content.description);
          infoWindow.open(appModel.get('gMap'), marker);
          appModel.set('infoWindow', infoWindow);
        });

      }
    }
  }

  var gMaps = new GMaps();

  // Attach maps to the window
  window.initMaps = function () {

    appModel.set('userLatLong', new google.maps.LatLng(appModel.get('latitude'), appModel.get('longitude')));

    var mapOptions = {
      center: new google.maps.LatLng(appModel.get('latitude'), appModel.get('longitude')),
      zoom: 9,
      disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var gMap = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    appModel.set('gMap', gMap);

    // Show approximate user location
    gMaps.placeMarker(appModel.get('userLatLong'));
  };

  return {
    init : gMaps.init,
    placeMarker : gMaps.placeMarker
  }

});