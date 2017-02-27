import React from 'react';
import { connect } from 'react-redux';
import R from 'ramda';
import classNames from 'classnames';
import { Link } from 'react-router';
import Radium from 'radium';

import BlogThumbLarge from './BlogThumbLarge';
import BlogThumbMedium from './BlogThumbMedium';

import groupPostsBy3 from '../../utils/groupPostsBy3';
import groupPostsBy2 from '../../utils/groupPostsBy2';
import groupPostsBy1 from '../../utils/groupPostsBy1';

const Header = () => (
  <div className={classNames({ 'pb3 pt2 pl3': window.innerWidth > 590, 'pb2 pt1 pl1': window.innerWidth < 590, })}>
    <h1 className="my3">Daniel Beaven</h1>
    <p style={{ maxWidth: '30rem' }}>
      This blog contains essays I have written as part of my degree course Interaction Design Arts. Each week I am required  to write up a 300 word post relating to the topic covered in that weeks lecture.
    </p>
  </div>
)

const Blog = ({ blogPosts, resize }) => {
  if (blogPosts.length < 1) return <div className="px3 mx-auto" style={{ maxWidth: '60rem' }}><Header /></div>;
  const group = (posts) => {
    if (window.innerWidth < 590) return groupPostsBy1(posts)
    if (window.innerWidth < 878) return groupPostsBy2(posts)
    return groupPostsBy3(posts);
  }
  const grouped = group(blogPosts);
  return (
    <div
      className={classNames('mx-auto', { 'px3': window.innerWidth > 590, 'px1': window.innerWidth < 590 })}
      style={{
        maxWidth: '70rem',
        // '@media (min-width: 1440px)': { maxWidth: '90rem' }
      }}>
      <Header />
      <div className="flex flex-wrap border-box">
        <div style={{ borderTop: '1px solid #a0a0a0', flex: '0 0 100%' }}>
          {
            window.innerWidth < 590 ? (
              <div className="px3">
                <BlogThumbMedium
                  title={grouped.top.title}
                  description={grouped.top.description}
                  image={{ src: grouped.top.coverImage }}
                  borderLeft={false} />
              </div>
            ) : (
              <BlogThumbLarge
                title={grouped.top.title}
                description={grouped.top.description}
                image={{ src: grouped.top.coverImage }} />
            )
          }
        </div>
        {
          grouped.rest.map((section, i1) => (
            <div className="flex py3 border-box justify-center" key={i1} style={{ width: '100%', borderTop: '1px solid #a0a0a0' }}>
              {
                section.length < 1 ? null : section.map((post, i2) => {
                  if (R.prop('coverImage', post))
                    return <BlogThumbMedium
                              key={i2 + 10}
                              title={post.title}
                              description={post.description}
                              image={{ src: post.coverImage}}
                              borderLeft={i2 === 1} />
                  return (
                    <div
                      key={i2 + 10}
                      style={{ maxWidth: '590px'}}
                      className={classNames('px3 border-box', {
                        'c-border-x': i2 === 1 && section.length > 2,
                        'c-border-l': i2 === 1 && section.length === 2
                      })}>
                      <Link to={'blog/' + post.title.split(' ').join('-')}>
                        <h3 className="m0 center">{post.title}</h3>
                        <p className="mb0 center">{post.description}</p>
                      </Link>
                    </div>
                  );
                })
              }
            </div>
          ))
        }
        <p className="flex items-center jusify-center fit p2" style={{ width: '100%' }}>
          <a className="center" style={{ width: '100%' }} href="mailto:dm.beaven@gmail.com?Subject=hello">dm.beaven@gmail.com</a>
        </p>
      </div>
    </div>
  )
}

export default connect(({ resize, blogPosts }) => ({ resize, blogPosts }))(Radium(Blog));
