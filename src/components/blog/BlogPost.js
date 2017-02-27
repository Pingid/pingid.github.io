import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import R from 'ramda';
import classNames from 'classnames';

const BlogPost = ({ params, router, blogPosts }) => {
  const post = R.find(R.propEq('title', params.post.split('-').join(' ')), blogPosts);
  if (!post) return router.push('/blog');
  let uniqueReactKey = 100;
  return (
    <div>
      <div
        className="px3"
        style={{
          maxWidth: '41rem',
          margin: '0 auto',
        }}>
        <h1 className="c-blog-post-title" style={{ margin: '5rem 0' }}>{post.title}</h1>
        {
          post.sections.map(section => (
            <div key={uniqueReactKey++}>
              { section.title.length > 0 ? <h4 className="my3">{section.title}</h4> : null }
              <div className="">
                { (section.image && section.image.src) ? <img role="presentation" className={classNames({ 'c-blog-image-wrap right pl2 pb2 mt1': post.textWrap, 'fit mt2 mb1': !post.textWrap })} src={section.image.src} /> : null }
                { section.paragraphs.map(paragraph => <p key={uniqueReactKey++}>{paragraph.text}</p>) }
              </div>
            </div>
          ))
        }
        {
          post.references.length > 0 ? (
            <div style={{ overflowX: 'scroll' }}>
              <h1 className="mb3 center" style={{ marginTop: '6rem' }}>References</h1>
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

export default connect(({ blogPosts }) => ({ blogPosts }))(Radium(BlogPost));
