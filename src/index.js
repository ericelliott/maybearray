const exists = x => x != null;

/**
 * Take a value and return true if the value is an array of a single
 * value, which Maybearray uses to represent Just(value)
 * @param {*} x A value to check
 * @return {Boolean}
 */
const isJust = x => exists(x) && x.length === 1;

/**
 * Take a value and return true if the value is an empty array,
 * which Maybearray uses to represent Nothing().
 * @param {*} x A value to check
 * @return {Boolean}
 */
const isNothing = x => Array.isArray(x) && x.length === 0;

/**
 * Take a value, undefined, or null, and lift
 * it to a maybe array.
 * A maybe array is an array of one value (just(value))
 * or zero values (Nothing).
 * @param  {*} value
 * @return {Array}
 */
const toMaybe = (value = undefined) => [value].filter(exists);

/**
 * Take a fallback (type: `Any`), a function to map over, and a maybe.
 * If the maybe contains a value, return the result of applying
 * the function to the value. Otherwise, return the fallback value.
 * This function is curried.
 * @param  {*} fallback A default fallback
 * @param  {Function} f A function to map over the value
 * @return {Function}   A function that takes a Maybe and returns the map result
 */
const maybe = (fallback, f) => Maybe =>
  isJust(Maybe) ? f(Maybe[0]) : fallback;

/**
 * Take a fallback function and a function, `f`, and return a function which takes a value.
 * The returned function will apply the fallback function if `value` does not exist.
 * Otherwise, it will apply `f` to `value` and return the result.
 * @param {Function} fallbackFn A function to call if value does not exist (undefined, null)
 * @param {Function} f A function to apply to the value if the value does exist.
 * @returns {Function} A function that takes a value and applies the appropriate function.
 */
const fallback = (fallbackFn, f) => value =>
  exists(value) ? f(value) : fallbackFn();

/**
 * Take a list of maybes and return a list of Just values, excluding Nothings.
 * @param  {Array} list An array of Maybes
 * @return {Array}      An array of Just values
 */
const values = list => [].concat(...list.filter(isJust));

module.exports = {
  toMaybe,
  maybe,
  values,
  fallback,
  isJust,
  isNothing
};
