## Functions

<dl>
<dt><a href="#toMaybe">toMaybe(value)</a> ⇒ <code>Array</code></dt>
<dd><p>toMaybe = value =&gt; Maybe</p>
<p>Take a value, undefined, or null, and lift
it to a maybe array.
A maybe array is an array of one value (just(value))
or zero values (Nothing).</p>
</dd>
<dt><a href="#maybe">maybe(fallback, f)</a> ⇒ <code>function</code></dt>
<dd><p>maybe = (b, f: a =&gt; b) =&gt; Maybe(a) =&gt; b</p>
<p>Take a fallback value, a function to map over, and a maybe.
If the maybe contains a value, return the result of applying
the function to the value. Otherwise, return the fallback value.
This function is curried.</p>
</dd>
<dt><a href="#fallback">fallback(fallbackFn, f)</a> ⇒ <code>function</code></dt>
<dd><p>fallback = (fallbackFn: Function, f: Function) =&gt; (value: Any) =&gt; Any</p>
<p>Apply a fallback function if <code>value</code> does not exist.
Otherwise, apply <code>f</code> to <code>value</code>.</p>
</dd>
<dt><a href="#values">values(list)</a> ⇒ <code>Array</code></dt>
<dd><p>values = (list: [...Maybe]) =&gt; [...Any]</p>
<p>Take a list of maybes and return a list of Just values, excluding Nothings.</p>
</dd>
</dl>

<a name="toMaybe"></a>

## toMaybe(value) ⇒ <code>Array</code>
toMaybe = value => Maybe

Take a value, undefined, or null, and lift
it to a maybe array.
A maybe array is an array of one value (just(value))
or zero values (Nothing).


| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

<a name="maybe"></a>

## maybe(fallback, f) ⇒ <code>function</code>
maybe = (b, f: a => b) => Maybe(a) => b

Take a fallback value, a function to map over, and a maybe.
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
fallback = (fallbackFn: Function, f: Function) => (value: Any) => Any

Apply a fallback function if `value` does not exist.
Otherwise, apply `f` to `value`.


| Param | Type | Description |
| --- | --- | --- |
| fallbackFn | <code>function</code> | A function to call if value does not exist (undefined, null) |
| f | <code>\*</code> | A function to apply to the value if the value does exist. |

<a name="values"></a>

## values(list) ⇒ <code>Array</code>
values = (list: [...Maybe]) => [...Any]

Take a list of maybes and return a list of Just values, excluding Nothings.

**Returns**: <code>Array</code> - An array of Just values  

| Param | Type | Description |
| --- | --- | --- |
| list | <code>Array</code> | An array of Maybes |

