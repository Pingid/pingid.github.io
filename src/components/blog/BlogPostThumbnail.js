import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import R from 'ramda';
import moment from 'moment';

const truncate = R.when(
  R.propSatisfies(R.gt(R.__, 400), 'length'),
  R.pipe(R.take(400), R.append('…'), R.join(''))
);

class Thumbnail extends Component {
  constructor() {
    super();
    this.state = { image: null, ratio: null };
  }
  componentDidMount() {
    const { post } = this.props;
    const image = post.sections.reduce((a, b) => (b.image && !a) ? b.image : a, null);
    const loadImage = new Image();
    loadImage.src = image.src;
    loadImage.onload = () => this.setState({ image, ratio: loadImage.width / loadImage.height });

  }
  render() {
    const { post } = this.props;
    return (
      <div>
        <Link className="text-decoration-none" to={'blog/' + post.title.split(' ').join('-')}>
          <h3 className="">{post.title}</h3>
          <p className="pl3" style={{ minWidth: '30%' }}>{truncate(post.sections[0].paragraphs[0].text)}</p>
          {/* image ? <img src={image.src} style={{ width: '100%' }}/> : null */}
          <p className="right-align">{moment(post.date).format('ll')}</p>
        </Link>
      </div>
    );
  }
};

Thumbnail.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    sections: PropTypes.arrayOf(PropTypes.shape({
      paragraphs: PropTypes.arrayOf(PropTypes.shape({ text: PropTypes.string.isRequired }))
    })),
    date: PropTypes.number.isRequired
  })
};

export default Thumbnail;
