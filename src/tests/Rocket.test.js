import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Rocket from '../components/Rocket';

test('Renders Correctly', () => {
  const rocket = {
    rocket_name: 'One Rocket',
    rocket_id: 'abc',
    description: 'This is a rocket',
    flickr_images: '#',
    reserved: false,
  };

  render(
    <Provider store={store}>
      <Rocket rocket={rocket} />
    </Provider>,
  );
  expect(screen).toMatchSnapshot();
});
