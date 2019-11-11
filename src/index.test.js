import { describe } from 'riteway';

import { toMaybe, maybe, values } from './index.js';

describe('toMaybe', async assert => {
  assert({
    given: 'no arguments',
    should: 'return an empty array',
    actual: toMaybe(),
    expected: []
  });

  assert({
    given: 'undefined',
    should: 'return an empty array',
    actual: toMaybe(undefined),
    expected: []
  });

  assert({
    given: 'null',
    should: 'return an empty array',
    actual: toMaybe(null),
    expected: []
  });

  assert({
    given: 0,
    should: 'return an array containing 0',
    actual: toMaybe(0),
    expected: [0]
  });

  assert({
    given: 'an empty array',
    should: 'return an array containing an empty array',
    actual: toMaybe([]),
    expected: [[]]
  });
});

describe('maybe', async assert => {
  const maybeDouble = maybe(0, x => x * 2);

  assert({
    given: 'fallback, function, maybe with value',
    should: 'apply the function to the value and return the result',
    actual: maybeDouble([2]),
    expected: 4
  });

  assert({
    given: 'fallback, function, empty maybe',
    should: 'return the fallback value',
    actual: maybeDouble([]),
    expected: 0
  });
});

describe('values', async assert => {
  const maybes = [undefined, 0, null, 1, true, [], false].map(toMaybe);
  const justValues = [0, 1, true, [], false];

  assert({
    given: 'a list of maybes',
    should: 'return a list of just values',
    actual: values(maybes),
    expected: justValues
  });
});
