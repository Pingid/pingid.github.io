import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

const BlogThumbMedium = ({ title, description, image, borderLeft }) => (
  <Link
    to={'blog/' + title.split(' ').join('-')}
    className={classNames('px3 border-box', { 'c-border-l': borderLeft })}>
    {
      window.innerWidth < 590 ? (
        <div className="flex border-box items-center flex-column">
          <h3 className="m0 center">{title}</h3>
          <img role="presentation" className="py1" style={{ maxWidth: '100%' }} src={image.src} />
          <p className="mb0 center">{description}</p>
        </div>
      ) : (
        <div className="flex border-box items-start">
          <img role="presentation" className="py1" style={{ flex: '0 0 50%', maxWidth: '50%' }} src={image.src} />
          <div className="pl3 border-box">
            <h3 className="m0">{title}</h3>
            <p className="mb0">{description}</p>
          </div>
        </div>
      )
    }
  </Link>
);

BlogThumbMedium.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.shape({ src: PropTypes.string.isRequired }).isRequired
};

export default BlogThumbMedium;
