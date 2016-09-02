import Ember from 'ember';

export default Ember.Service.extend ({
  googleMaps: window.google.maps,
  findMap(container, options) {
    return new this.googleMaps.Map(container, options);
  },
  center(latitude, longitude) {
    return new this.googleMaps.LatLng(latitude, longitude);
  },
  createMarker(markerOptions) {
    return new this.googleMaps.Marker(markerOptions);
  },
  createService(map) {
    return new this.googleMaps.places.PlacesService(map);
  },
  createInfoWindow(content) {
    return new this.googleMaps.InfoWindow(content);
  },
  createBikeLayer(map) {
    // var trafficLayer = new this.googleMaps.TrafficLayer();
    // trafficLayer.setMap(map);
    // var transitLayer = new google.maps.TransitLayer();
    // transitLayer.setMap(map);
    var bikeLayer = new window.google.maps.BicyclingLayer();
    bikeLayer.setMap(map);
  },
  addClickEvent(marker, data, map, content, info) {
    this.googleMaps.event.addListener(marker, "click", function(e) {
      info.setContent(content);
      info.open(map, marker);
    });
  },
  createDistanceMatrix(origin, epicodus) {
    var distanceResults = {};
    var service = new window.google.maps.DistanceMatrixService();
    distanceResults = service.getDistanceMatrix(
      {
        origins: [origin],
        destinations: [epicodus],
        travelMode: 'BICYCLING',
        unitSystem: window.google.maps.UnitSystem.IMPERIAL
      }, callback);
    function callback(response, status) {
      if (status === 'OK') {
        var origins = response.originAddresses;
        var destinations = response.destinationAddresses;

        for (var i = 0; i < origins.length; i++) {
          var results = response.rows[i].elements;
          for (var j = 0; j < results.length; j++) {
            var element = results[j];
            var distance = element.distance.text;
            var duration = element.duration.text;
            var from = origins[i];
            var to = destinations[j];
            distanceResults =  {'element': element, 'distance': distance, 'from': from, 'to': to, 'duration': duration};
          }
        }
      }
      console.log(distanceResults, 'in callback service');
      return distanceResults;
    }
    console.log(distanceResults, 'after callback service');
    return distanceResults;
  },
  getPlaces(service, map, request, requestImage) {
    var callback = function(results, status) {
      var newMap = map;
      var infoWindow = new window.google.maps.InfoWindow();
      if (status === "OK") {
        for (var i = 0; i < results.length; i ++) {
          var place = results[i];
          var image = requestImage;
          var markerOptions = {
            position: {lat: place.geometry.location.lat(), lng: place.geometry.location.lng()},
            map: newMap,
            icon: image,
            title: place.name
          };

          var marker = new window.google.maps.Marker(markerOptions);
          // var info = new window.google.maps.InfoWindow(infoWindowContent);
          // marker.addListener(marker, 'click', function(){
          //   info.open(newMap, this);
          // });
          (function(marker, place) {
            var infoWindowContent =
              "<p><strong>"+place.name+"</strong></p>"+
              "<p>"+place.vicinity+"</p>";
            window.google.maps.event.addListener(marker, "click", function(e){
              infoWindow.setContent(infoWindowContent);
              infoWindow.open(newMap, marker);
            });
          })(marker, place);
        }
      }
    };
    service.nearbySearch(request,callback);
  }
});
