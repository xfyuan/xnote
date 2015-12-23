import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('notebook', 'Unit | Model | notebook', {
  // Specify the other units that are required for this test.
  needs: [
    'model:user',
    'model:note'
  ]
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test('it counts notes', function(assert) {
  var notebook = this.subject({ title: 'my notebook' });
  var note;
  var noteCount = Math.floor(Math.random() * (10 - 1) + 1);

  Ember.run(()=> {
    for (var i=0; i < noteCount; ++i) {
      note = this.store().createRecord('note');
      notebook.get('notes').addObject(note);
    }
  });

  assert.equal(notebook.noteCount(), noteCount);
});
