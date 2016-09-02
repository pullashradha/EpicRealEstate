import Ember from 'ember';

export default Ember.Component.extend({
  housesBought: Ember.inject.service(),
  alreadySold: Ember.computed('housesBought.boughtHousesList.[]', function(){
    return this.get('housesBought').includes(this.get('house'));
  }),
  showForm: false,
  showRejection: false,
  actions: {
    showForm() {
      this.set('showForm', true);
    },
    buyHouse() {
      this.set('showForm', false);
      this.sendAction('buyHouse');
    },
    rejectBuyer() {
      this.set('showForm', false);
      this.set('showRejection', true);
    }
  }
});
