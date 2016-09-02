import Ember from 'ember';

export default Ember.Component.extend ({
  favoriteHouses: Ember.inject.service(),
  actions: {
    removeFromFavorites(house) {
      this.get("favoriteHouses").removeFromFavorites(house);
    }
  }
});
