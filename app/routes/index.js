import Ember from 'ember';
// import config from '../config/environment';

export default Ember.Route.extend ({
  model() {
    return this.store.findAll('house');
  },
  sortedHouses: Ember.computed.sort('houses',['price:asc'])
  
  // model: function() {
  //   var key = config.zillowApiKey;
  //   var url = 'http://www.zillow.com/webservice/GetUpdatedPropertyDetails.htm?zws-id=' +key+ '&zpid=48749425&output=json&callback=cb';
  //   return Ember.$.get(url).then(function(responseJSON) {
  //     console.log(responseJSON);
  //     // console.log(responseJSON.results); no results in xml only in JSON
  //     return responseJSON.results;
  //   });
  // }
});
