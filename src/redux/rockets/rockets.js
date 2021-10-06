import axios from 'axios';

const LOAD_ROCKETS = 'App/rockets/LOAD_ROCKETS';
const BOOK_ROCKET = 'App/rockets/BOOK_ROCKET';

const url = 'https://api.spacexdata.com/v3/rockets';

const initialState = [];

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ROCKETS:
      return action.payload;
    case BOOK_ROCKET:
      const newState = state.map(rocket => {
        if(rocket.rocket_id !== action.id) 
            return rocket;
        return { ...rocket, reserved: true };
      });
      return newState;
    default:
      return state;
  }
};

export const loadRockets = (payload) => ({
  type: LOAD_ROCKETS,
  payload,
});

export const bookRocket = (id) => ({
  type: BOOK_ROCKET,
  id,
});

export const getRockets = () => async (dispatch) => {
  const rocketsData = await axios.get(url)
    .then((response) => response.data);
  dispatch(loadRockets(rocketsData));
};

export default rocketsReducer;
