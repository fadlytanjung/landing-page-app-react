import React from 'react';
import PropTypes from 'prop-types';
import AppContextProvider from './contexts';
import pages from './pages';
import { hot } from 'react-hot-loader/root';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { ROUTES } from './configs';
import { Switch, Route } from 'react-router-dom';

const App = ({ history, store }) => {

  const routeApp = 
    (<Switch>
      <Route exact path={ROUTES.HOME()} component={pages.Home} />
      <Route component={pages.Error404} />
    </Switch>);
  
  return (
      <Provider store={store}>
        <main>
          <Router history={history}>
            <AppContextProvider>
              {routeApp}
            </AppContextProvider>
          </Router>
        </main>
      </Provider>
  );
}

App.propTypes = {
  children: PropTypes.element,
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};

export default hot(App);