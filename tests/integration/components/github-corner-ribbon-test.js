import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('github-corner-ribbon', 'Integration | Component | github corner ribbon', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{github-corner-ribbon}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#github-corner-ribbon}}
      template block text
    {{/github-corner-ribbon}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
