import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'assets/scss/now-ui-dashboard.scss?v1.4.0';
import 'assets/css/demo.css';

import AdminLayout from 'layouts/Admin.js';
import { HashRouter } from 'react-router-dom';

const hist = createBrowserHistory();

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Redirect to="/admin/our-culture" />
    </Switch>
  </HashRouter>,
  document.getElementById('root')
);
