import Ember from 'ember';

export default Ember.Route.extend ({
  model(params) {
    return this.store.findRecord('house', params.house_id);
  },
  actions: {
    goBackToList: function() {
      this.transitionTo('index');
    },
    buyHouse() {
      this.transitionTo('houses-bought');
    }
  }
});
