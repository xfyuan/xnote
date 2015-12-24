import isValidLength from '../../../utils/is-valid-length';
import { module, test } from 'qunit';

module('Unit | Utility | is valid length');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = isValidLength('wertfgyh', 0, 100);
  assert.ok(result);
});
