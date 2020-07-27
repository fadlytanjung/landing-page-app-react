import React from 'react';

export default function SectionVideo() {
  return (
    <section className="video-area pt-40 pb-40">
      <div className="overlay overlay-bg" />
      <div className="container">
        <div className="video-content">
          <a id="video" video-url="https://www.youtube.com/watch?v=-fac_iJ8Nw8"><img alt="" src="assets/img/play-btn.png" /></a>
          <div className="video-desc">
            <h3 className="h2 text-white">Being unique is the preference</h3>
            <h4 className="text-white">Youtube video will appear in popover</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
