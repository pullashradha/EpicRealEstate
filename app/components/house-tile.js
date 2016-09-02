import Ember from 'ember';

export default Ember.Component.extend ({
  favoriteHouses: Ember.inject.service(),
  inList: Ember.computed('favoriteHouses.favoriteHousesList.[]', function(){
    return this.get('favoriteHouses').includesFavoriteHouse(this.get('house'));
  }),
  mortgagePayment: Ember.computed('house.price', function() {
    var p = this.get('house.price');
    var r = 0.003;
    var n = 360;
    return (p * ((r * Math.pow((1+r),n))/(Math.pow((1+r),n)-1))).toFixed(2);
  }),
  actions: {
    addToFavorites(house) {
      this.get("favoriteHouses").addFavoriteHouse(house);
    },
    removeFromFavorites(house) {
      this.get("favoriteHouses").removeFromFavorites(house);
    }
  }
});
