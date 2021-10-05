import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Rockets from '../pages/Rockets';
import Missions from '../pages/Missions';
import MyProfile from '../pages/MyProfile';
import NotFound from '../pages/NotFound';
import Navbar from './Navbar';
import { getRockets } from '../redux/rockets/rockets';
import { getMissions } from '../redux/missions/missions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
    dispatch(getMissions());
  }, [dispatch]);

  return (
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
};

export default App;
