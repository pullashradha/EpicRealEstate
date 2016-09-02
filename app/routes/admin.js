import Ember from 'ember';

export default Ember.Route.extend ({
  model() {
    return this.store.findAll("house");
  },
  actions: {
    saveNewHouse(params) {
      var newHouse = this.store.createRecord("house", params);
      newHouse.save();
      this.transitionTo("index");
    },
    updateHouse() {
      this.transitionTo("index");
    },
    deleteHouse(house) {
      if (confirm("Are you sure you want to delete this house?")) {
        house.destroyRecord();
      }
      this.transitionTo("index");
    }
  }
});
