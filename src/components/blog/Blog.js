import React from 'react';
import { Link } from 'react-router'
import CONTENT from '../../../content/blogPosts';


const Blog = () => {
  return (
    <div>
      {
        CONTENT.posts.map(post => <Link to={'blog/' + post.title.split(' ').join('-')}><h1>{post.title}</h1></Link>)
      }
    </div>
  );
};

export default Blog;
