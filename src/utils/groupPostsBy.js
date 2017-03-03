import R from 'ramda';

export default (posts, maxLength) => {
  const fitsIn = (item, group) =>
    R.reduce((a, b) => (a + b.size), 0, group) <= maxLength;

  const fitsSomewhere = (item, groups) =>
    R.reduce((a, b) => fitsIn(b, item) ? true : a, false, groups);

  const addIn = (item, groups) =>
    R.map(x => fitsIn(item, x) ? R.append(item, x) : x, groups)


  return R.tail(R.reduce((a, b, i) => {
    console.log('Round', i, 'List', a, 'Item', b);
    if (fitsSomewhere(b, a)) return addIn(b, a);
    return R.append([b], a);
  }, [[{ size: 999 }]], posts))
}
