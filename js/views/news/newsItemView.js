
define('newsItemView', [
  'jquery',
  'Backbone',
  'handlebars',
  'appModel',
  'text!views/news/templates/newsItemTemplate.tpl'
],

function ($, Backbone, handlebars, appModel, newsItemTemplate) {

  "use strict";

  var NewsItemView = Backbone.View.extend({

    tagName : 'li',
    events : {
      'click' : 'panTo'
    },

    initialize : function (options) {
      this.model = options.model
    },

    panTo : function () {
      appModel.get('gMap').panTo(this.model.longLat);
    },

    render : function () {

      var template = handlebars.compile(newsItemTemplate),
          compiled = template(this.model);

      this.$el.html(compiled);
      return this;
    }

  });

  return NewsItemView;

});
