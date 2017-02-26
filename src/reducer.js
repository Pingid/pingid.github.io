const ADD_BLOG_POST = 'ADD_BLOG_POST';

const intialState = {
  blogPosts: []
};

export const addBlogPost = (post) => ({ type: ADD_BLOG_POST, post });

export default (state = intialState, action) => {
  switch (action.type) {
    case ADD_BLOG_POST:
      return Object.assign({}, state, {
        blogPosts: [].concat(state.blogPosts, [action.post]).sort((a, b) => a.date < b.date)
      });
    default: return state
  }
}
