import Ember from 'ember';

export function formatMoney(params) {
  var money = params[0];
  return Ember.String.htmlSafe(money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
}

export default Ember.Helper.helper(formatMoney);
