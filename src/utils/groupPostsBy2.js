import R from 'ramda';

export default (posts) => {
  const top = R.head(R.filter(x => (R.prop('coverImage', x) && R.length(R.prop('coverImage', x)) > 0 && !x.textWrap), posts))
  const rest = !top ? posts : posts.filter(x => x.title !== top.title).reduce((a, b) => {
    const last = R.last(a);
    const addToLast = R.adjust(R.append(b), R.length(a) - 1, a);
    const addNewLast = R.append([b], a);
    // Does it have a cover image
    if (R.prop('coverImage', b) && R.length(R.prop('coverImage', b)) > 0) {
      // Is the last array empty or contain one item without coverImage
      if ( R.length(last) === 0) return addToLast;
      return addNewLast;
    }
    // Does the last array have less than 3 items
    if ( R.length(last) < 2 ) {
      // does the array have two none image items or one or none items
      if ((R.length(last) === 1 && !R.find(R.prop('coverImage'), last)) ) return addToLast;
      return addNewLast;
    }
    return addNewLast
  }, [[]])
  return { top, rest };
};
