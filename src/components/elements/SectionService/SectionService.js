import React from 'react';
import PropTypes from 'prop-types';

export default function SectionService(props) {

  const {
    heading,
    subheading,
    items
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
          {items.map((item, id) => {
            return (
              <div className="col-lg-4" key={id}>
                <div className="single-cat d-flex flex-column">
                  <a className="hb-sm-margin mx-auto d-block" href="#" >
                    <span className="hb hb-sm inv hb-facebook-inv">
                      <span className="lnr lnr-magic-wand" />
                    </span>
                  </a>
                  <h4 className="mb-20" style={item.styles ? item.styles : {}}>{item.title}</h4>
                  <p>
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


SectionService.defaultProps = {
  heading: '',
  items: [],
  subheading: '',
};

SectionService.propTypes = {
  heading: PropTypes.oneOf(['string','node']),
  items: PropTypes.array,
  subheading: PropTypes.oneOf(['string', 'node']),
};
