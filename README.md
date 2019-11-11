# Maybearray

Native JavaScript Maybes built with arrays.

## API

This library exports pure functions you can mix and match any way you like.
Maybes are represented as an array with a value (e.g., `[true]`), or an empty
array (`[]`). As such, you can use them anywhere you'd use a normal JavaScript
array with no special considerations, and no need to convert back and forth
between a weird custom type and native JavaScript types.

##  toMaybe = value => Maybe

Take a value, undefined, or null, and lift it to a maybe array.

A maybe array is an array of one value (just(value)) or zero values (Nothing).

* **param**  {Any} value
* **returns** {Array}

const toMaybe = value => [value].filter(exists);


##  maybe = (b, f: a => b) => Maybe[a] => b

Take a fallback value, a function to map over, and a maybe. If the maybe
contains a value, return the result of applying the function to the value.
Otherwise, return the fallback value. This function is curried to take
the fallback and function first, then return a function which takes the Maybe.

* **param**  {Any} fallback A default fallback
* **param**  {Function}   A function to map over the value
* **returns** {Function}   A function that takes a Maybe and returns the map result

const maybe = (fallback, f) => Maybe => Maybe.map(f)[0] || fallback;


##  values = (list: [...Maybe]) => [...Any]

Take a list of maybes and return a list of Just values, excluding Nothings.

* **param**  {Array} list An array of Maybes
* **returns** {Array}      An array of Just values


## Credits

Created for [EricElliottJS.com](https://ericelliottjs.com).
