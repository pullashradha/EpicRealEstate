import Ember from 'ember';

export function bathDisplay(params) {
  var baths = params[0];
  if (baths === 1) {
    return Ember.String.htmlSafe('<span>'+baths+' bath</span>');
  } else {
    return Ember.String.htmlSafe('<span>'+baths+' baths</span>');
  }
}

export default Ember.Helper.helper(bathDisplay);
