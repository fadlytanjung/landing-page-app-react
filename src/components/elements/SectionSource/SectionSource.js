import React from 'react';

export default function SectionSource() {

  const icon = (text,icon) =>{
    return(
      <div className="buttons flex-row d-flex" key={text}>
        <i aria-hidden="true" className={`fa fa-${icon}`} />
        <div className="desc">
          <a href="#">
            <p><span>Available</span> <br />on {text}</p>
          </a>
        </div>
      </div>
    );
  };

  return (
    <section className="call-to-action-area section-gap">
      <div className="container">
        <div className="row justify-content-center top">
          <div className="col-lg-12">
            <h1 className="text-white text-center">Download This App Today!</h1>
            <p className="text-white text-center mt-30">
              It won’t be a bigger problem to find one video game lover in your neighbor.
              Since the introduction of Virtual Game, it has been achieving great heights so
              far as its popularity and technological advancement are concerned.
            </p>
          </div>
        </div>
        <div className="row justify-content-center d-flex">
          <div className="download-button d-flex flex-row justify-content-center mt-30">
            {[
              { text: 'App Store', icon:'apple' },
              { text: 'Play Store', icon: 'android' },
            ].map((item)=>{
              return icon(item.text, item.icon);
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

