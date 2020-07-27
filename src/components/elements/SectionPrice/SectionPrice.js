import React from 'react';

export default function SectionPrice() {

  return (
    <section className="price-area section-gap" id="price">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="menu-content pb-60 col-lg-8">
            <div className="title text-center">
              <h1 className="mb-10">Choose the Perfect Plan for you</h1>
              <p>Who are in extremely love with eco friendly system.</p>
            </div>
          </div>
        </div>
        <div className="row">
          {
            [0, 1, 3].map((item) => {
              return (
                <div className="col-lg-4" key={item}>
                  <div className="single-price">
                    <div className="top-sec d-flex justify-content-between">
                      <div className="top-left">
                        <h4>Standard</h4>
                        <p>For the <br />individuals</p>
                      </div>
                      <div className="top-right">
                        <h1>£199</h1>
                      </div>
                    </div>
                    <div className="bottom-sec">
                      <p>
                        “Few would argue that, despite the advancements
                      </p>
                    </div>
                    <div className="end-sec">
                      <ul>
                        <li>2.5 GB Free Photos</li>
                        <li>Secure Online Transfer Indeed</li>
                        <li>Unlimited Styles for interface</li>
                        <li>Reliable Customer Service</li>
                        <li>Manual Backup Provided</li>
                      </ul>
                      <button className="primary-btn price-btn mt-20">Purchase Plan</button>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </section>
  );
}
