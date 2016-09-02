import Ember from 'ember';

export default Ember.Component.extend ({
  mortgagePayment: Ember.computed("house.price", function() {
    var p = this.get("house.price");
    var r = 0.003;
    var n = 360;
    return (p * ((r * Math.pow((1+r),n))/(Math.pow((1+r),n)-1))).toFixed(2);
  })
});
