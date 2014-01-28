
define('geoLocation', [
  'jquery',
  'Backbone',
  'appModel'
],

function ($, Backbone, appModel) {

  "use strict";

  var GeoLocation = function () {};

  GeoLocation.prototype = {
    init : function () {
      // Set the users location
      navigator.geolocation.getCurrentPosition(function (position) {
        var crds = position.coords;
        appModel.set('latitude', crds.latitude);
        appModel.set('longitude', crds.longitude);
      }, function (error) {
        alert('There was an error getting your position');
      }, appModel.get('geoOptions'));
    }
  }

  return new GeoLocation().init;

});