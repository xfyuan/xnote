import { moduleForModel, test } from 'ember-qunit';

moduleForModel('user', 'Unit | Serializer | application', {
  // Specify the other units that are required for this test.
  needs: ['model:user']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
