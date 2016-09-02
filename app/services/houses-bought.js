import Ember from 'ember';

export default Ember.Service.extend ({
  boughtHousesList: [],
  buyHouse(house) {
    var duplicateHousesList = this.get("boughtHousesList").slice();
    if (duplicateHousesList.contains(house)) {
      alert("This house is already sold!");
    } else {
      this.get("boughtHousesList").pushObject(house);
    }
  },
  includes(house) {
    return this.get('boughtHousesList').includes(house);
  }
});
