import { describe } from 'riteway';

import {
  toMaybe,
  maybe,
  values,
  fallback,
  isJust,
  isNothing,
  branch,
  caseof
} from './index.js';

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

  assert({
    given: 'A funciton that returns zero',
    should: 'not return the fallback value',
    actual: maybe(100, x => x * 2)([0]),
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

describe('fallback', async assert => {
  // We want to avoid:
  // reportBalance(notLoaded) // 'You have $undefined'

  const reportBalance = balance => `You have $${balance}`;
  const notLoadedBalance = undefined;
  const hasLoadedBalance = 100;

  let checkMainCall = 'main function not called';
  const loading = fallback(
    () => 'Loading...',
    () => {
      checkMainCall = 'Error! Called main function!';
    }
  )(notLoadedBalance); // "Loading..."

  assert({
    given: 'an undefined value',
    should: 'apply the fallback function',
    actual: loading,
    expected: 'Loading...'
  });

  assert({
    given: 'an undefined value',
    should: 'not call the main function',
    actual: checkMainCall,
    expected: 'main function not called'
  });

  let checkFallbackCall = 'fallback not called';
  const loaded = fallback(() => {
    checkFallbackCall = 'Error! Called fallback function!';
  }, reportBalance)(hasLoadedBalance); // You have $100

  assert({
    given: 'an existing value',
    should: 'apply the primary function',
    actual: loaded,
    expected: 'You have $100'
  });

  assert({
    given: 'an existing value',
    should: 'not call the fallback function',
    actual: checkFallbackCall,
    expected: 'fallback not called'
  });
});

describe('isJust', async assert => {
  assert({
    given: 'Just(0)',
    should: 'return true',
    actual: isJust(toMaybe(0)),
    expected: true
  });

  assert({
    given: 'Just([])',
    should: 'return true',
    actual: isJust(toMaybe([])),
    expected: true
  });

  assert({
    given: 'Nothing()',
    should: 'return false',
    actual: isJust(toMaybe()),
    expected: false
  });
});

describe('isNothing', async assert => {
  assert({
    given: 'Just(0)',
    should: 'return false',
    actual: isNothing(toMaybe(0)),
    expected: false
  });

  assert({
    given: 'Just([])',
    should: 'return false',
    actual: isNothing(toMaybe([])),
    expected: false
  });

  assert({
    given: 'Nothing()',
    should: 'return true',
    actual: isNothing(toMaybe()),
    expected: true
  });
});

describe('caseof', async assert => {
  assert({
    given: 'a maybe that is Nothing',
    should: 'apply the Nothing function',
    actual: caseof({
      Just: value => `Just ${value}`,
      Nothing: () => 'Nothing'
    })(toMaybe()),
    expected: 'Nothing'
  });

  assert({
    given: 'a maybe that is not Nothing',
    should: 'apply the Just function to the value',
    actual: caseof({
      Just: value => `Just ${value}`,
      Nothing: () => 'Nothing'
    })(toMaybe([1])),
    expected: 'Just 1'
  });

  assert({
    given: 'a maybe that is not Nothing',
    should: 'apply the Just function',
    actual: caseof({
      Just: () => `Just`,
      Nothing: () => 'Nothing'
    })(toMaybe([1])),
    expected: 'Just'
  });
});

describe('branch', async assert => {
  assert({
    given: 'predicate returning false',
    should: 'apply the Left branch to the value',
    actual: branch(
      x => x,
      value => `Left ${value}`,
      () => 'Right'
    )(false),
    expected: 'Left false'
  });

  assert({
    given: 'a predicate returning true',
    should: 'apply the Right branch to the value',
    actual: branch(
      x => x,
      () => 'Left',
      value => `Right ${value}`
    )(true),
    expected: 'Right true'
  });

  assert({
    given: 'a predicate that returning true',
    should: 'apply the Right branch',
    actual: branch(
      x => x % 2 === 0,
      () => 'Left',
      () => 'Right'
    )(4),
    expected: 'Right'
  });

  assert({
    given: 'a predicate that returning false',
    should: 'apply the Right branch',
    actual: branch(
      x => x % 2 === 0,
      () => 'Left',
      () => 'Right'
    )(5),
    expected: 'Left'
  });
});
