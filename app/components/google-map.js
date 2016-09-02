import Ember from 'ember';

export default Ember.Component.extend ({
  map: Ember.inject.service('google-map'),
  distanceMatrixResults: [],
  actions: {
    createMap(house) {
      //init map
      var latitude = house.get('latitude');
      var longitude = house.get('longitude');
      var container = this.$('.map-display')[0];
      var options = {
        center: this.get('map').center(latitude, longitude),
        zoom: 15,
      };
      var newMap = this.get('map').findMap(container, options);
      this.get('map').createBikeLayer(newMap);
      // //init distance matrix
      // var origin = this.get('map').center(latitude, longitude);
      // var epicodus = this.get('map').center(45.5207086, -122.6795911);
      // var results = this.get('map').createDistanceMatrix(origin, epicodus);
      // (this.get('distanceMatrixResults')).pushObject(this.get('map').createDistanceMatrix(origin, epicodus));
      // console.log(this.get('distanceMatrixResults'), 'google-map component js');

      //place marker
      var image = {
        url: 'images/house-emoji.png',
        scaledSize: new window.google.maps.Size(32, 32)
      };
      var markerOptions = {
        position: {lat: latitude, lng: longitude},
        map: newMap,
        icon: image
      };
      var marker = this.get('map').createMarker(markerOptions);
      //home infowindow
      var infoWindowContent = {
        content: "<p><strong>Your future home!</strong></p>"
      };
      var info = this.get('map').createInfoWindow(infoWindowContent);
      marker.addListener('click', function(){
        info.open(newMap, marker);
      });
      //school points of interest
      var schoolRequest = {
        location: this.get('map').center(latitude, longitude),
        radius: '1000',
        type: 'school'
      };
      var schoolImage = {
        url: 'images/school-emoji.png',
        scaledSize: new window.google.maps.Size(32,32)
      };
      var service = this.get('map').createService(newMap);
      this.get('map').getPlaces(service, newMap, schoolRequest, schoolImage);
      //grocery points of interest
      var groceryRequest = {
        location: this.get('map').center(latitude, longitude),
        radius: '1000',
        type: 'grocery_or_supermarket'
      };
      var groceryImage = {
        url: 'images/grocery-emoji.png',
        scaledSize: new window.google.maps.Size(32,32)
      };
      service = this.get('map').createService(newMap);
      this.get('map').getPlaces(service, newMap, groceryRequest, groceryImage);
      //hospital points of interest
      var hospitalRequest = {
        location: this.get('map').center(latitude, longitude),
        radius: '1000',
        type: 'hospital'
      };
      var hospitalImage = {
        url: 'images/hospital-emoji.png',
        scaledSize: new window.google.maps.Size(32,32)
      };
      service = this.get('map').createService(newMap);
      this.get('map').getPlaces(service, newMap, hospitalRequest, hospitalImage);
    }
  }
});
