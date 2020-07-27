import React from 'react';
import Header from '../../elements/Header';
import Footer from '../../elements/Footer';
import PropTypes from 'prop-types';

export default function Pagebase(props) {

  const { children } = props;

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

Pagebase.defaultProps = {
  children: {}
};

Pagebase.propTypes = {
  children: PropTypes.node,
};
