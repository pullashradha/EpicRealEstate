import DS from 'ember-data';

export default DS.Model.extend ({
  address: DS.attr(),
  latitude: DS.attr(),
  longitude: DS.attr(),
  neighborhood: DS.attr(),
  image: DS.attr(),
  beds: DS.attr(),
  baths: DS.attr(),
  sqft: DS.attr(),
  price: DS.attr(),
  description: DS.attr(),
  time_sold: DS.attr(),
  user: DS.belongsTo('user', {async:true})
});
