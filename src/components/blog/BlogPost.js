import React, { PropTypes } from 'react';
import R from 'ramda';
import CONTENT from '../../../content/blogPosts';

const BlogPost = ({ params, router }) => {
  const post = R.find(R.propEq('title', params.post.split('-').join(' ')), CONTENT.posts);
  if (!post) return router.push('/blog');
  let uniqueReactKey = 100;
  return (
    <div>
      <div
        style={{
          maxWidth: '41rem',
          margin: '0 auto'
        }}>
        <h1 className="center" style={{ margin: '5rem 0' }}>{post.title}</h1>
        {
          post.sections.map(section => (
            <div key={uniqueReactKey++}>
              { section.title.length > 0 ? <h2>{section.title}</h2> : null }
              { section.paragraphs.map(paragraph => <p key={uniqueReactKey++}>{paragraph.text}</p>) }
            </div>
          ))
        }
        {
          post.references.length > 0 ? (
            <div>
              <h1 className="my3 center">References</h1>
              {
                post.references.map(reference => (
                  <p
                    style={{ color: '#5a5a5a' }}
                    key={uniqueReactKey++}>
                    {reference.text}
                  </p>
                ))
              }
            </div>
          ) : null
        }
      </div>
    </div>
  )
};

BlogPost.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.number,
    sections: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      paragraphs: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string
      }))
    })),
    references: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string
    }))
  })
};

export default BlogPost;
