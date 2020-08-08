import React from 'react';
import configureStore, { history } from './store/configureStore';
import { render } from 'react-dom';
import App from './App';

import './favicon.ico';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

import './assets/css/linearicon.css?raw';
import './assets/css/owl.carousel.css?raw';
import './assets/css/hexagons.min.css?raw';
import './assets/css/font-awesome.min.css?raw';

import './App.css';
import './bootstrap.css?raw';
import './Main.css?raw';
// import 'typeface-poppins';

const store = configureStore();

render(
  <App history={history} store={store} />,
  document.getElementById('app')
);

moduleHotAccept(module);

export function moduleHotAccept(mod) {
  if (mod.hot) {
    mod.hot.accept('./App', () => {
      const NewApp = require('./App').default;
      render(
        <NewApp history={history} store={store} />,
        document.getElementById('app')
      );
    });
  }
}
