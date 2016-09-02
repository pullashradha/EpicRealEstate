import Ember from 'ember';

export default Ember.Component.extend ({
  updateHouseForm: false,
  actions: {
    showUpdateHouseForm() {
      this.set("updateHouseForm", true);
    },
    updateHouse(house) {
      house.save();
      this.set("updateHouseForm", false);
      this.sendAction("updateHouse");
    }
  }
});
