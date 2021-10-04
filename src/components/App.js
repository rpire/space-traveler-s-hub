import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Rockets from '../pages/Rockets';
import Missions from '../pages/Missions';
import MyProfile from '../pages/MyProfile';
import NotFound from '../pages/NotFound';
import Navbar from './Navbar';

const App = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Rockets />
      </Route>
      <Route path="/missions">
        <Missions />
      </Route>
      <Route path="/my-profile">
        <MyProfile />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </>
);

export default App;
