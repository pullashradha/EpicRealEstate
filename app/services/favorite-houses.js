import Ember from 'ember';

export default Ember.Service.extend ({
  favoriteHousesList: [],
  addFavoriteHouse(house) {
    var duplicateFavoriteHouses = this.get("favoriteHousesList").slice();
    if (duplicateFavoriteHouses.contains(house)) {
      alert("This house is already in your favorites list!");
    } else {
      this.get("favoriteHousesList").pushObject(house);
    }
  },
  includesFavoriteHouse(house) {
    return this.get('favoriteHousesList').includes(house);
  },
  removeFromFavorites(house) {
    this.get("favoriteHousesList").removeObject(house);
  }
});
