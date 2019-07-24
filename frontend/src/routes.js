import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ReservationManager from './reservation/ReservationManager';
import AdminManager from './admin/AdminManager';
import UserManager from './user/UserManager';

export default (
  <Switch>
    <Route path="/admin" component={AdminManager} />
    <Route path="/user" component={UserManager} />
    <Route path="/" component={ReservationManager} />
  </Switch>
);
