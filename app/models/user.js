import DS from 'ember-data';

export default DS.Model.extend({
  first_name: DS.attr(),
  last_name: DS.attr(),
  down_payment: DS.attr(),
  salary: DS.attr(),
  houses: DS.hasMany('house', {async: true})
});
