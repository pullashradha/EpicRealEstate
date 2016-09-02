import Ember from 'ember';

export default Ember.Component.extend ({
  actions: {
    createMap(house) {
      this.sendAction('createMap', house);
    }
  }
});
