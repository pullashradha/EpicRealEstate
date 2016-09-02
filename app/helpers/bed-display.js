import Ember from 'ember';

export function bedDisplay(params) {
  var beds = params[0];
  if (beds === 1) {
    return Ember.String.htmlSafe('<span>'+beds+' bed</span>');
  } else {
    return Ember.String.htmlSafe('<span>'+beds+' beds</span>');
  }
}

export default Ember.Helper.helper(bedDisplay);
