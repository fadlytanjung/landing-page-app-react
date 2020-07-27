/*eslint-disable no-unused-vars*/
import React, {
  useEffect,
  useState,
  useRef,
  useLayoutEffect
} from 'react';
import PropTypes from 'prop-types';

export function Menus({ menus, targetRef }) {

  const [scrolled, setScrolled] = useState(0);
  const boxShadow = '-21.213px 21.213px 30px 0px rgba(158, 158, 158, 0.3)';

  useLayoutEffect(() => {
    const handleScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setScrolled(winScroll / height);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={'default-header'} ref={targetRef} style={{ position: 'fixed', boxShadow: scrolled > 0.02 ? boxShadow : '' }}>
      <nav className={'navbar navbar-expand-lg  navbar-light'}>
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <img alt="" src="/assets/img/logo.png" />
          </a>
          <button
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler"
            data-target="#navbarSupportedContent"
            data-toggle="collapse"
            type="button"
          >
            <span className="lnr lnr-menu" />
          </button>

          <div className="collapse navbar-collapse justify-content-end align-items-center" id="navbarSupportedContent">
            <ul className="navbar-nav">
              {menus.map((item) => {
                return item && item.subitem !== undefined ?
                  <li className="dropdown" key={item.item}>
                    <a className="dropdown-toggle" data-toggle="dropdown" href={item.url} id="navbardrop">
                      {item.item}
                    </a>
                    <div className="dropdown-menu">
                      {item.subitem.map((subitem, index) => {
                        return <a className="dropdown-item" href={subitem.url} key={index}>{subitem.item}</a>;
                      })}
                    </div>
                  </li> :
                  <li key={item.item}><a href={item.url}>{item.item}</a></li>;
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default function Header() {
  const window_height = window.innerHeight;
  const [headerHeight, setHeaderHeight] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(window_height);
  const [fitScreen, setFitScreen] = useState(window_height - headerHeight);
  const targetRef = useRef();

  useLayoutEffect(() => {
    if (targetRef.current) {
      setHeaderHeight(targetRef.current.offsetHeight);
      setFitScreen(window_height - headerHeight);
    }
  }, []);

  useEffect(() => {
    setFitScreen(window_height - headerHeight);
  }, [fitScreen]);

  const menus = [
    { item: 'Home', url: '#home' },
    { item: 'Service', url: '#service' },
    { item: 'feature', url: '#feature' },
    { item: 'price', url: '#price' },
    { item: 'Faq', url: '#faq' },
    {
      item: 'Pages', url: '#',
      subitem: [
        { item: 'Generic', url: '#' },
        { item: 'Elements', url: '#' },
      ]
    }
  ];

  return (
    <section className="banner-area" id="home">
      <Menus menus={menus} targetRef={targetRef} />
      <div className="container">
        <div className="row justify-content-end fullscreen align-items-center" style={{ height: sectionHeight }}>
          <div className="col-lg-6 col-md-12 banner-left">
            <h1 className="text-white">The Best App <br />in the Universe</h1>
            <p className="mx-auto text-white  mt-20 mb-40">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp
              <br /> or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
            </p>
            <a className="text-uppercase header-btn" href="#" ><span>Load More Item</span></a>
          </div>
          <div className="col-lg-6 col-md-12 no-padding banner-right">
            <img alt="" className="img-fluid" src="/assets/img/header-img.png" />
          </div>
        </div>
      </div>
    </section>
  );
}

Menus.defaultProps = {
  menus: [],
  targetRef: '' || undefined,
};

Menus.propTypes = {
  menus: PropTypes.array,
  targetRef: PropTypes.oneOf(['string', 'undefined']),
};

