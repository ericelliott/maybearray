const exists = x => x != null;
const isJust = x => exists(x) && x.length;

const toMaybe = value => [value].filter(exists);
const maybe = (fallback, f = () => {}) => arr => arr.map(f)[0] || fallback;
const values = list => [].concat(...list.filter(isJust));

module.exports = {
  toMaybe,
  maybe,
  values
};
