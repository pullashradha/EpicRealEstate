import Ember from 'ember';

export default Ember.Component.extend({
  housesBought: Ember.inject.service(),
  actions: {
    buyHouse(house) {
      var first_name = this.get('first_name');
      var down_payment = parseInt(this.get('down_payment'));
      var salary = parseInt(this.get('salary'));
      var minDownPayment = this.get('house').get('price') * 0.03;
      var minSalary = this.get('house').get('price') * 0.2;
      if ((down_payment >= minDownPayment) && salary >= minSalary) {
        alert('Congratulations, ' + first_name + '! You have successfully purchased this house!');
        this.get("housesBought").buyHouse(house);
        this.sendAction('buyHouse');
      } else {
        this.sendAction('rejectBuyer');
      }
    }
  }
});
