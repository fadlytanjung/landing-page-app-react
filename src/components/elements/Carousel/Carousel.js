import React from 'react';
import PropTypes from 'prop-types';
import OwlCarousel from 'react-owl-carousel';

export default function Carousel(props) {

  const { items } = props;

  return (
    <OwlCarousel
      autoplay={true}
      className="active-feature-carusel"
      loop
      margin={30}
      nav={true}
      navText={[<span className="lnr lnr-arrow-up" key={'left'} />, <span className="lnr lnr-arrow-down" key={'right'} />]}
    >
      {items.map((item, id) => {
        return (
          <div className="item single-carusel relative" key={id}>
            <div className="image-wrap">
              <div className="overlay overlay-bg" />
              <img alt="" className="img-fluid" src={`assets/img/${item.image}`} />
            </div>
          </div>
        );
      })}
    </OwlCarousel>
  );
}

Carousel.defaultProps = {
  items: []
};

Carousel.propTypes = {
  items: PropTypes.array,
};
