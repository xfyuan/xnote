import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('edit-note', 'Integration | Component | edit note', {
  needs: [
    'component:markdown-to-html'
  ]
});

test('it renders', function(assert) {
  var component = this.subject();
  assert.expect(4);

  assert.equal(component._state, 'preRender');

  this.render();
  assert.equal(component._state, 'inDOM');

  this.render(hbs`{{edit-note}}`);
  assert.equal(this.$('button:first').text().trim(), 'save');
  assert.equal(this.$('button:last').text().trim(), 'close');
});

test('it saves', function(assert) {
  var component = this.subject();
  this.render();

  var saveTarget = {
    save() {
      assert.ok(true, 'saved the note');
    }
  };
  Ember.run(()=> {
    component.set('note', saveTarget);
  });
  this.$().find('#save').click();
});

test('it close', function(assert) {
  var component = this.subject();
  this.render();

  var closeTarget = {
    closeAction() {
      assert.ok(true, 'closed the window');
    }
  };

  component.set('close', 'closeAction');
  component.set('targetObject', closeTarget);
  this.$().find('#close').click();
});
