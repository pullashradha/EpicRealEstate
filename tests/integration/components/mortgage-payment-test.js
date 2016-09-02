import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mortgage-payment', 'Integration | Component | mortgage payment', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{mortgage-payment}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#mortgage-payment}}
      template block text
    {{/mortgage-payment}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
