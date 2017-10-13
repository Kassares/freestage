import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import SingleBand from './containers/SingleBand';
import Profile from './containers/Profile';

import Example from './containers/_Example';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/example" component={Example} />
    <Route path="/single-band" component={SingleBand} />
    <Route path="/profile" component={Profile} />
  </Route>
)
