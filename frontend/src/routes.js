import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ReservationManager from './reservation/ReservationManager';
import AdminManager from './admin/AdminManager';

export default (
  <Switch>
    <Route path="/admin" component={AdminManager} />
    <Route path="/" component={ReservationManager} />
  </Switch>
);
