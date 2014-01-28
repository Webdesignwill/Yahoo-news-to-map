
define('appModel', [
  'Backbone'
],

function (Backbone) {

  "use strict";

  var AppModel = Backbone.Model.extend({

    defaults : {
      feedKey : '0h4I8bvB3BGapGYoxJtC8g',
      urlParams : {
        key : 'AIzaSyAJz-qXUYE-uxiypUu5CU9PXYvCc92FDms',
        sensor : 'true',
        callBack : 'initMaps',
        library : 'geometry'
      },
      geoOptions : {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 60000
      }
    },

    initialize : function () {
      this.set(this.defaults);
    }

  });

  return new AppModel();

});
