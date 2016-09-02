import Ember from 'ember';

export default Ember.Component.extend ({
  isSortDescending: false,
  isSqftDescending: false,
  sortBy : ['sqft:asc'],
  sortedHouses: Ember.computed.sort('houses','sortBy'),
  actions: {

    sortByPriceAsc(){
      this.toggleProperty('isSortDescending');
      this.set('sortBy',['price:asc']);
    },
    sortByPriceDesc(){
      // debugger;
      this.toggleProperty('isSortDescending');
      this.set('sortBy',['price:desc']);
    },
    sortBySqftAsc(){
      this.toggleProperty('isSqftDescending');
      this.set('sortBy',['sqft:asc']);
    },
    sortBySqftDesc(){
      this.toggleProperty('isSqftDescending');
      this.set('sortBy',['sqft:desc']);
    }
  }
});
