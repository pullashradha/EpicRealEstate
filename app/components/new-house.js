import Ember from 'ember';

export default Ember.Component.extend ({
  addNewHouseForm: false,
  actions: {
    showNewHouseForm() {
      this.set("addNewHouseForm", true);
    },
    saveNewHouse() {
      var params = {
        address: this.get("address"),
        latitude: this.get("latitude"),
        longitude: this.get("longitude"),
        neighborhood: this.get("neighborhood"),
        image: this.get("image"),
        beds: this.get("beds"),
        baths: this.get("baths"),
        sqft: this.get("sqft"),
        price: this.get("price"),
        description: this.get("description")
      };
      this.set("addNewHouseForm", false);
      this.sendAction("saveNewHouse", params);
    }
  }
});
