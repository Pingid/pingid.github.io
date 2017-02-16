import React, { PropTypes } from 'react';
import R from 'ramda';
import classNames from 'classnames';
import CONTENT from '../../../content/blogPosts';

const BlogPost = ({ params, router }) => {
  const post = R.find(R.propEq('title', params.post.split('-').join(' ')), CONTENT.posts);
  if (!post) return router.push('/blog');
  let uniqueReactKey = 100;
  return (
    <div>
      <div
        className="px3"
        style={{
          maxWidth: '41rem',
          margin: '0 auto'
        }}>
        <h3 className="c-blog-post-title" style={{ margin: '5rem 0' }}>{post.title}</h3>
        {
          post.sections.map(section => (
            <div key={uniqueReactKey++}>
              { section.title.length > 0 ? <h4 className="my3">{section.title}</h4> : null }
              <div className="">
                { (section.image && section.image.src) ? <img className={classNames({ ['c-blog-image-wrap right pl2 pb2 mt1']: section.image.textWrap, ['fit mt2 mb1']: !section.image.textWrap })} src={section.image.src} /> : null }
                { section.paragraphs.map(paragraph => <p key={uniqueReactKey++}>{paragraph.text}</p>) }
              </div>
            </div>
          ))
        }
        {
          post.references.length > 0 ? (
            <div>
              <h3 className="mb3 center" style={{ marginTop: '6rem' }}>References</h3>
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
