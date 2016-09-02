import Ember from 'ember';

export default Ember.Component.extend ({
  map: Ember.inject.service('google-map'),
  distanceMatrixResults: [],
  actions: {
    createMap(markers) {
      var container = this.$('.map-display')[0];
      var options = {
        center: this.get('map').center(markers[0].get('latitude'), markers[0].get('longitude')),
        zoom: 12,
      };
      var newMap = this.get('map').findMap(container, options);
      this.get('map').createBikeLayer(newMap);
      //place markers
      var info= this.get('map').createInfoWindow();

      for (var i=0; i<markers.length; i++) {
        var image = {
            url: "images/house-emoji.png",
            scaledSize: new window.google.maps.Size(32, 32)
        };
        var data = markers[i];
        var myLatlng = this.get('map').center(data.get('latitude'), data.get('longitude'));
        var marker = this.get('map').createMarker({
          position: myLatlng,
          map: newMap,
          title: data.get('address'),
          icon: image
        });
        //link needs to pass house object, so doesn't load...
        var beds = function(beds) {
          if(beds === 1){
            return "bed";
          } else {
            return "beds";
          }
        };
        var baths = function(baths) {
          if(baths === 1){
            return "bath";
          } else {
            return "baths";
          }
        };
        var formatMoney = function(money) {
          return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        };
        var content = "<p><a href='/show/"+data.get('id')+"'>"+data.get('address')+"</a></p><p>"+ data.get('beds') + " " + beds(data.get('beds'))+" | "+data.get('baths')+" "+ baths(data.get('baths'))+ " | $" + formatMoney(data.get('price'));
        var service = this.get('map');
        (function (marker, data, newMap, content, info, service) {
          service.addClickEvent(marker, data, newMap, content, info);
        }) (marker, data, newMap, content, info, service);
      }
    }
  }
});
