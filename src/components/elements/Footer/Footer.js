import React from 'react';

export default function Footer() {

  return (
    <footer className="footer-area">
      <div className="container">
        <div className="row footer-bottom d-flex justify-content-between">
          <p className="col-lg-8 col-sm-12 footer-text m-0 text-white">
            Copyright &copy;<script>{new Date().getFullYear()};</script> All rights reserved </p>
        </div>
      </div>
    </footer>
  );
}

