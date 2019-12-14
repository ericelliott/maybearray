## Functions

<dl>
<dt><a href="#isJust">isJust(x)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Take a value and return true if the value is an array of a single
value, which Maybearray uses to represent Just(value)</p>
</dd>
<dt><a href="#isNothing">isNothing(x)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Take a value and return true if the value is an empty array,
which Maybearray uses to represent Nothing().</p>
</dd>
<dt><a href="#toMaybe">toMaybe(value)</a> ⇒ <code>Array</code></dt>
<dd><p>Take a value, undefined, or null, and lift
it to a maybe array.
A maybe array is an array of one value (just(value))
or zero values (Nothing).</p>
</dd>
<dt><a href="#maybe">maybe(fallback, f)</a> ⇒ <code>function</code></dt>
<dd><p>Take a fallback (type: <code>Any</code>), a function to map over, and a maybe.
If the maybe contains a value, return the result of applying
the function to the value. Otherwise, return the fallback value.
This function is curried.</p>
</dd>
<dt><a href="#fallback">fallback(fallbackFn, f)</a> ⇒ <code>function</code></dt>
<dd><p>Take a fallback function and a function, <code>f</code>, and return a function which takes a value.
The returned function will apply the fallback function if <code>value</code> does not exist.
Otherwise, it will apply <code>f</code> to <code>value</code> and return the result.</p>
</dd>
<dt><a href="#values">values(list)</a> ⇒ <code>Array</code></dt>
<dd><p>Take a list of maybes and return a list of Just values, excluding Nothings.</p>
</dd>
</dl>

<a name="isJust"></a>

## isJust(x) ⇒ <code>Boolean</code>
Take a value and return true if the value is an array of a single
value, which Maybearray uses to represent Just(value)


| Param | Type | Description |
| --- | --- | --- |
| x | <code>\*</code> | A value to check |

<a name="isNothing"></a>

## isNothing(x) ⇒ <code>Boolean</code>
Take a value and return true if the value is an empty array,
which Maybearray uses to represent Nothing().


| Param | Type | Description |
| --- | --- | --- |
| x | <code>\*</code> | A value to check |

<a name="toMaybe"></a>

## toMaybe(value) ⇒ <code>Array</code>
Take a value, undefined, or null, and lift
it to a maybe array.
A maybe array is an array of one value (just(value))
or zero values (Nothing).


| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

<a name="maybe"></a>

## maybe(fallback, f) ⇒ <code>function</code>
Take a fallback (type: `Any`), a function to map over, and a maybe.
If the maybe contains a value, return the result of applying
the function to the value. Otherwise, return the fallback value.
This function is curried.

**Returns**: <code>function</code> - A function that takes a Maybe and returns the map result  

| Param | Type | Description |
| --- | --- | --- |
| fallback | <code>\*</code> | A default fallback |
| f | <code>function</code> | A function to map over the value |

<a name="fallback"></a>

## fallback(fallbackFn, f) ⇒ <code>function</code>
Take a fallback function and a function, `f`, and return a function which takes a value.
The returned function will apply the fallback function if `value` does not exist.
Otherwise, it will apply `f` to `value` and return the result.

**Returns**: <code>function</code> - A function that takes a value and applies the appropriate function.  

| Param | Type | Description |
| --- | --- | --- |
| fallbackFn | <code>function</code> | A function to call if value does not exist (undefined, null) |
| f | <code>function</code> | A function to apply to the value if the value does exist. |

<a name="values"></a>

## values(list) ⇒ <code>Array</code>
Take a list of maybes and return a list of Just values, excluding Nothings.

**Returns**: <code>Array</code> - An array of Just values  

| Param | Type | Description |
| --- | --- | --- |
| list | <code>Array</code> | An array of Maybes |

