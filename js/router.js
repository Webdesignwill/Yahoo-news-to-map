
define('router', [
  'jquery',
  'Backbone',
  'newsView',
  'newsCollection',
  'appModel',
  'geoLocation',
  'gMaps'
],

function ($, Backbone, NewsView, newsCollection, appModel, GeoLocation, gMaps) {

  "use strict";

  var Router = Backbone.Router.extend({

    initialize : function () {
      // Init geo
      var geoLocation = new GeoLocation();

      // Init mapView which deals with maps
      gMaps.init();
    },

    routes : {
      'news' : 'renderNews'
    },

    renderNews : function () {
      var newsView = new NewsView();
      $('#news-body').html(newsView.render().el);
    }

  });

  return new Router();

});