import React from 'react';

export default function SectionAbout() {
  return (
    <section className="about-area section-gap">
      <div className="container">
        <div className="row justify-content-center align-items-center d-flex">
          <div className="col-lg-6 about-left">
            <h1>We Believe that <br />Interior beautifies the <br />Total Architecture</h1>
            <p className="mt-20">
              inappropriate behavior is often laughed off as “boys will be boys,”
              women face higher conduct standards especially in the workplace.
              That’s why it’s crucial that, as women, our behavior on the job is beyond reproach.
              inappropriate behavior is often laughed off as “boys will be boys,” women face higher
              conduct standards especially in the workplace. That’s why it’s crucial that.
            </p>
            <a className="btn primary-btn text-uppercase mt-20" href="#" >see details</a>
          </div>
          <div className="col-lg-6 about-right">
            <img alt="" className="img-fluid" src="assets/img/about-img.png" />
          </div>
        </div>
      </div>
    </section>
  );
}
