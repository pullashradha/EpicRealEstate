import Ember from 'ember';

export default Ember.Component.extend ({
  housesBought: Ember.inject.service(),
  alreadySold: Ember.computed('housesBought.boughtHousesList.[]', function(){
    return this.get('housesBought').includes(this.get('house'));
  })
});
