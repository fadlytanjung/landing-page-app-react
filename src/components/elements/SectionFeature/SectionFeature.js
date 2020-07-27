import React from 'react';
import PropTypes from 'prop-types';

export default function SectionFeature(props) {

  const {
    heading,
    subheading,
    items
  } = props;

  return (
    <section className="service-area section-gap" id="feature">
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
          {items.map((item, id) => {
            return (
              <div className="col-lg-4  col-md-6 mb-30" key={id}>
                <div className="single-service">
                  <img alt="" className="d-block mx-auto mb-30" src={`assets/img/${item.image}`} />
                  <h4><a href="#">{item.title}</a></h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

SectionFeature.defaultProps = {
  heading: '',
  items: [],
  subheading: '',
};

SectionFeature.propTypes = {
  heading: PropTypes.oneOf(['string', 'node']),
  items: PropTypes.array,
  subheading: PropTypes.oneOf(['string', 'node']),
};
