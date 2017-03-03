import R from 'ramda';

export default (posts) => {
  const top = R.head(R.filter(x => (R.prop('coverImage', x) && R.length(R.prop('coverImage', x)) > 0), posts));
  const rest = posts.filter(x => x.title !== top.title).map(x => [x]);
  return { top, rest };
};
