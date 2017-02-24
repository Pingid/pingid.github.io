import React from 'react';

// import CONTENT from '../../../content/blogPosts';
import BLOG_POSTS from '../../../content/posts';
import BlogPostThumbnail from './BlogPostThumbnail';

const Blog = () => {
  return (
    <div
      className="p3">
        <div className="my4">
          {/*<img src="src/img/me.jpg" style={{ height: '10rem' }}/>*/}
          {/*<h1 className="">{CONTENT.description}</h1>*/}
        </div>
        <div
          className="flex flex-column"
          style={{
            maxWidth: '41rem',
            margin: '0 auto'
          }}>
          {
            BLOG_POSTS.sort((a, b) => a.date < b.date).map((post, index) => (
              <BlogPostThumbnail post={post} key={index} />
            ))
          }
        </div>
    </div>
  );
};

export default Blog;
