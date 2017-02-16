import React from 'react';
import { Link } from 'react-router'
import R from 'ramda';
import moment from 'moment';
import CONTENT from '../../../content/blogPosts';

const truncate = R.when(
  R.propSatisfies(R.gt(R.__, 400), 'length'),
  R.pipe(R.take(400), R.append('…'), R.join(''))
);

const Blog = () => {
  console.log(moment(1446940800000).format('ll'));
  return (
    <div
      className="px4 mx4">
        <div className="my4">
          {/*<img src="src/img/me.jpg" style={{ height: '10rem' }}/>*/}
          {/*<h1 className="">{CONTENT.description}</h1>*/}
        </div>
        <div
          className="px3"
          style={{
            maxWidth: '41rem',
            margin: '0 auto'
          }}>
          {
            CONTENT.posts.sort((a, b) => a.date < b.date).map((post, index) => (
              <Link
                key={index}
                className="text-decoration-none"
                to={'blog/' + post.title.split(' ').join('-')}>
                <h3 className="">{post.title}</h3>
                <p className="pl3">{truncate(post.sections[0].paragraphs[0].text)}</p>
                <p className="right-align">{moment(post.date).format('ll')}</p>
              </Link>
            ))
          }
        </div>
    </div>
  );
};

export default Blog;
