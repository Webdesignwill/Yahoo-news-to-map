
define('newsCollection', [
  'jquery',
  'Backbone',
  'newsModel',
  'appModel'
],

function ($, Backbone, newsModel, appModel) {

  "use strict";

  var NewsCollection = Backbone.Collection.extend({

    url : 'http://pipes.yahoo.com/pipes/pipe.run?_id= ' + appModel.get('feedKey') + '&_render=json',
    model : newsModel,

    initialize : function () {

    },

    parse : function (res) {
      // Wanna make sure that each item has geo location attached
      // before creating the collection
      var items = _.filter(res.value.items, function (item) {
        return item['geo:lat'] && item['geo:long'];
      })
      return items;
    }

  });

  return new NewsCollection();

});