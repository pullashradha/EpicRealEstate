import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('google');
  this.route('show', {path: '/show/:house_id'});
  this.route('favorite-houses');
  this.route('houses-bought');
  this.route('admin');
});

export default Router;
