import React from 'react';
import { connect } from 'react-redux';
import R from 'ramda';
import classNames from 'classnames';
import { Link } from 'react-router';

import groupPostsBy3 from '../../utils/groupPostsBy3';
import groupPostsBy2 from '../../utils/groupPostsBy2';

const Header = () => (
  <div className="pb3 pt2 pl3" style={{ borderBottom: '1px solid #a0a0a0' }}>
    <h1 className="my3">Daniel Beaven</h1>
    <p style={{ maxWidth: '30rem' }}>
      This blog contains essays I have written as part of my degree course Interaction Design Arts. Each week I am required  to write up a 300 word post relating to the topic covered in that weeks lecture.
    </p>
  </div>
)

const Blog = ({ blogPosts }) => {
  if (blogPosts.length < 1) return <div className="px3 mx-auto" style={{ maxWidth: '60rem' }}><Header /></div>;
  const group = (posts) => {
    if (window.innerWidth < 878) return groupPostsBy2(posts)
    return groupPostsBy3(posts);
  }
  const grouped = group(blogPosts);
  return (
    <div className="px3 mx-auto" style={{ maxWidth: '60rem' }}>
        <Header />
        <div className="flex flex-wrap border-box">
          <div style={{ borderBottom: '1px solid #a0a0a0', flex: '0 0 100%' }}>
            {
              grouped.top ? (
                  <Link to={'blog/' + grouped.top.title.split(' ').join('-')}>
                    <div className="flex py2 px3 border-box items-start">
                      <img role="presentation" className="pt3" style={{ flex: '0 0 66.66%', width: '66.66%' }} src={grouped.top.coverImage} />
                      <div className="pl3 border-box self-start">
                        <h1>{grouped.top.title}</h1>
                        <p>{grouped.top.description}</p>
                      </div>
                    </div>
                  </Link>
              ) : null
            }
          </div>
          {
            grouped.rest.map((section, i1) => (
              <div className="flex py3 border-box" key={i1} style={{ borderBottom: '1px solid #a0a0a0' }}>
                {
                  section.length < 1 ? null : section.map((post, i2) => {
                    if (R.prop('coverImage', post)) return (
                      <Link
                        key={i2 + 10} to={'blog/' + post.title.split(' ').join('-')}
                        className={classNames('px3 border-box', { 'c-border-l': i2 === 1 })}>
                        <div className="flex border-box items-start">
                          <img role="presentation" className="py1" style={{ flex: '0 0 50%', maxWidth: '50%' }} src={post.coverImage} />
                          <div className="pl3 border-box">
                            <h3 className="m0">{post.title}</h3>
                            <p>{post.description}</p>
                          </div>
                        </div>
                      </Link>
                    );
                    return (
                      <div
                        key={i2 + 10}
                        className={classNames('px3 border-box', {
                          'c-border-x': i2 === 1 && section.length > 2,
                          'c-border-l': i2 === 1 && section.length === 2
                        })}
                        style={{ flex: '0 0 33.33%'}}>
                        <Link to={'blog/' + post.title.split(' ').join('-')}>
                          <h3 className="m0 center">{post.title}</h3>
                          <p className="center">{post.description}</p>
                        </Link>
                      </div>
                    );
                  })
                }
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default connect(({ blogPosts }) => ({ blogPosts }))(Blog);
