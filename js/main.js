
require.config({

  paths : {
    jquery                    : 'libs/jquery/jquery-min',
    Backbone                  : 'libs/backbone/backbone-min',
    underscore                : 'libs/underscore/underscore-min',
    handlebars                : 'libs/handlebars/handlebars',
    text                      : 'libs/require/text-min',
    infoBox                   : 'libs/google/infoBox',

    gMaps                     : 'utils/gMaps',
    geoLocation               : 'utils/geoLocation',

    newsCollection            : 'collections/newsCollection',

    newsModel                 : 'models/newsModel',
    appModel                  : 'models/appModel',

    newsView                  : 'views/news/newsView',
    newsItemView              : 'views/news/newsItemView'
    
  },

  shim : {
    'Backbone' : {
      deps : ['jquery', 'underscore', 'handlebars'],
      exports : "Backbone"
    },
    'handlebars' : {
      exports: 'Handlebars'
    },
    'infoBox' : {
      deps : ['gMaps']
    }
  }
});

require([
  'Backbone',
  'router'
], function (Backbone, router) {

  Backbone.history.start();
  router.navigate('news', {trigger: true});

});