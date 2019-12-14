const exists = x => x != null;
const isJust = x => exists(x) && x.length;

/** toMaybe = value => Maybe
 * Take a value, undefined, or null, and lift
 * it to a maybe array.
 * A maybe array is an array of one value (just(value))
 * or zero values (Nothing).
 * @param  {*} value
 * @return {Array}
 */
const toMaybe = (value = undefined) => [value].filter(exists);

/** maybe = (b, f: a => b) => Maybe(a) => b
 * Take a fallback value, a function to map over, and a maybe.
 * If the maybe contains a value, return the result of applying
 * the function to the value. Otherwise, return the fallback value.
 * This function is curried.
 * @param  {*} fallback A default fallback
 * @param  {Function} f A function to map over the value
 * @return {Function}   A function that takes a Maybe and returns the map result
 */
const maybe = (fallback, f) => Maybe =>
  isJust(Maybe) ? f(Maybe[0]) : fallback;

/** fallback = (fallbackFn: Function, f: Function) => (value: Any) => Any
 * Apply a fallback function if `value` does not exist.
 * Otherwise, apply `f` to `value`.
 * @param {Function} fallbackFn A function to call if value does not exist (undefined, null)
 * @param {*} f A function to apply to the value if the value does exist.
 * @returns {Function}
 */
const fallback = (fallbackFn, f) => value =>
  exists(value) ? f(value) : fallbackFn();

/** values = (list: [...Maybe]) => [...Any]
 * Take a list of maybes and return a list of Just values, excluding Nothings.
 * @param  {Array} list An array of Maybes
 * @return {Array}      An array of Just values
 */
const values = list => [].concat(...list.filter(isJust));

module.exports = {
  toMaybe,
  maybe,
  values,
  fallback
};
