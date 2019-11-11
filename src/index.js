const exists = x => x != null;
const isJust = x => exists(x) && x.length;

/** toMaybe = value => Maybe
 * Take a value, undefined, or null, and lift
 * it to a maybe array.
 * A maybe array is an array of one value (just(value))
 * or zero values (Nothing).
 * @param  {Any} value
 * @return {Array}
 */
const toMaybe = value => [value].filter(exists);

/** maybe = (b, f: a => b) => Maybe[a] => b
 * Take a fallback value, a function to map over, and a maybe.
 * If the maybe contains a value, return the result of applying
 * the function to the value. Otherwise, return the fallback value.
 * This function is curried.
 * @param  {Any} fallback A default fallback
 * @param  {Function}   A function to map over the value
 * @return {Function}   A function that takes a Maybe and returns the map result
 */
const maybe = (fallback, f) => Maybe => Maybe.map(f)[0] || fallback;

/** values = (list: [...Maybe]) => [...Any]
 * Take a list of maybes and return a list of Just values, excluding Nothings.
 * @param  {Array} list An array of Maybes
 * @return {Array}      An array of Just values
 */
const values = list => [].concat(...list.filter(isJust));

module.exports = {
  toMaybe,
  maybe,
  values
};
