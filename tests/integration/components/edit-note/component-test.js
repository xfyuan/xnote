import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('edit-note', 'Integration | Component | edit note', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{edit-note}}`);

  assert.equal(this.$('button:first').text().trim(), "save");
  assert.equal(this.$('button:last').text().trim(), "close");

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#edit-note}}
      template block text
    {{/edit-note}}
  `);

  assert.equal(this.$('div:last').text().trim(), 'template block text');
});
