import React from 'react';
import { screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from '../redux/configureStore';
import Mission from '../components/Mission';

test('Check if Mission is rendering correctly', () => {
  const body = document.createElement('tbody');
  const mission = {
    mission_id: 'dadan',
    mission_name: 'Space X',
    description: 'rgnrnglkddr',
    reserved: false,
  };
  ReactDOM.render(
    <Provider store={store}>
      <Mission mission={mission} />
    </Provider>,
    body,
  );
  expect(screen).toMatchSnapshot();
});
