import Ember from 'ember';

export function distanceMatrix(params) {
  var distanceMatrixResults =  params[0][0];
  console.log(distanceMatrixResults);
  return Ember.String.htmlSafe(
    '<h2>Distance to Epicodus</h2>' +
    '<p><strong>From:</strong>' + distanceMatrixResults.from + '</p>' +
    '<p><strong>To:</strong> Epicodus</p>' +
    '<p><strong>Distance:</strong> ' + distanceMatrixResults.distance + '</p>' +
    '<p><strong>Travel Time by Bike:</strong> ' + distanceMatrixResults.duration + '</p>'
  );
}

export default Ember.Helper.helper(distanceMatrix);
