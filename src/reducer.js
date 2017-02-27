const ADD_BLOG_POST = 'ADD_BLOG_POST';
const RESIZE_UPDATE = 'RESIZE_UPDATE';

const intialState = {
  blogPosts: [],
  resize: 1
};

export const addBlogPost = (post) => ({ type: ADD_BLOG_POST, post });

export default (state = intialState, action) => {
  switch (action.type) {
    case ADD_BLOG_POST:
      return Object.assign({}, state, {
        blogPosts: [].concat(state.blogPosts, [action.post]).sort((a, b) => a.date < b.date)
      });

    case RESIZE_UPDATE:
      return Object.assign({}, state, { resize: state.resize + 1 });

    default: return state
  }
}
