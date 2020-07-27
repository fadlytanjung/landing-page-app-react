import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

export default function SectionFaq() {

  const Count = (time) => {
    return (
      <CountUp duration={1} end={time} >
        {({ countUpRef, start }) => (
          <VisibilitySensor  delayedCall onChange={start}>
            <span ref={countUpRef} />
          </VisibilitySensor>
        )}
      </CountUp>
    );
  };

  return (
    <section className="faq-area section-gap" id="faq">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="menu-content pb-60 col-lg-8">
            <div className="title text-center">
              <h1 className="mb-10">Frequently Asked Questions</h1>
              <p>Who are in extremely love with eco friendly system.</p>
            </div>
          </div>
        </div>
        <div className="row d-flex align-items-center">
          <div className="counter-left col-lg-3 col-md-3">
            <div className="single-facts">
              <h2 className="counter">{Count(5962)}</h2>
              <p>Projects Completed</p>
            </div>
            <div className="single-facts">
              <h2 className="counter">{Count(2394)}</h2>
              <p>New Projects</p>
            </div>
            <div className="single-facts">
              <h2 className="counter">{Count(1439)}</h2>
              <p>Tickets Submitted</p>
            </div>
            <div className="single-facts">
              <h2 className="counter">{Count(933)}</h2>
              <p>Cup of Coffee</p>
            </div>
          </div>
          <div className="faq-content col-lg-9 col-md-9">
            <div className="single-faq">
              <h2>Are your Templates responsive?</h2>
              <p>
                “Few would argue that, despite the advancements of feminism over
                the past three decades,
                women still face a double standard when it comes to their behavior.
                While men’s borderline-inappropriate behavior.
              </p>
            </div>
            <div className="single-faq">
              <h2>Does it have all the plugin as mentioned?</h2>
              <p>
                “Few would argue that, despite the advancements of feminism over
                the past three decades,
                women still face a double standard when it comes to their behavior.
                While men’s borderline-inappropriate behavior.
              </p>
            </div>
            <div className="single-faq">
              <h2>Lorem ipsum</h2>
              <p>
                “Few would argue that, despite the advancements of feminism over
                the past three decades,
                women still face a double standard when it comes to their behavior.
                While men’s borderline-inappropriate behavior.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
