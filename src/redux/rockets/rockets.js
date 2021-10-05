import axios from 'axios';

const LOAD_ROCKETS = 'App/rockets/LOAD_ROCKETS';

const url = 'https://api.spacexdata.com/v3/rockets';

const initialState = [];

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ROCKETS:
      return action.payload;
    default:
      return state;
  }
};

export const loadRockets = (payload) => ({
  type: LOAD_ROCKETS,
  payload,
});

export const getRockets = () => async (dispatch) => {
  const rocketsData = await axios.get(url)
    .then((response) => response.data);
  dispatch(loadRockets(rocketsData));
};

export default rocketsReducer;
