
define('newsView', [
  'jquery',
  'Backbone',
  'newsCollection',
  'newsItemView',
  'gMaps',
  'text!views/news/templates/newsTemplate.tpl'
],

function ($, Backbone, newsCollection, NewsItemView, gMaps, newsTemplate) {

  "use strict";

  var NewsView = Backbone.View.extend({

    tagName : 'ul',
    id : 'news-items',

    initialize : function () {
      this.listenTo(newsCollection, 'sync', this.render);
      newsCollection.fetch();
    },

    render : function () {

      var fragment = document.createDocumentFragment(),
          longLat;

      newsCollection.each(function (model) {
        // Set map markers
        // TODO google async loading issue
        longLat = new google.maps.LatLng(model.get('geo:lat'), model.get('geo:long'));
        gMaps.placeMarker(longLat, {description : model.get('description'), title : model.get('title')});

        // Set this while I have it because we will need to set click event to pan
        // in item view
        model.set('longLat', longLat);

        // I pass attributes so I can pass whole object straight to Handlebars
        var newsItemView = new NewsItemView({model : model.attributes});
        fragment.appendChild(newsItemView.render().el);

      });
      this.$el.html(fragment);
      return this;
    }

  });

  return NewsView;

});
