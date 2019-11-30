import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Routes from './components/routing/Routes';
import { loadUser } from './redux/actions/authActions';
import store from './redux/store';
import setAuthToken from './utils/setAuthToken';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route component={Routes} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
