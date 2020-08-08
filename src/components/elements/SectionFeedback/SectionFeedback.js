import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../../elements/Carousel';

export default function SectionFeedback(props) {

  const {
    heading,
    subheading,
  } = props;

  return (
    <section className="cat-area section-gap" id="service">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="menu-content pb-60 col-lg-8">
            <div className="title text-center">
              <h1 className="mb-10">{heading}</h1>
              {typeof subheading === 'object' ? subheading : <p>{subheading}</p>}
            </div>
          </div>
        </div>
        <div className="row">
          <Carousel items={[
            { image: 's1.webp' },
            { image: 's2.webp' },
            { image: 's3.webp' },
          ]} />
        </div>
      </div>
    </section>
  );
}


SectionFeedback.defaultProps = {
  heading: '',
  subheading: '',
};

SectionFeedback.propTypes = {
  heading: PropTypes.oneOf(['string', 'node']),
  subheading: PropTypes.oneOf(['string', 'node']),
};
