import Ember from 'ember';

export default Ember.Component.extend ({
  actions: {
    createMap(houses) {
      var markers = [];
      houses.forEach(function(house){
        markers.pushObject(house);
      });
      this.sendAction('createMap', markers);
    }
  }
});
