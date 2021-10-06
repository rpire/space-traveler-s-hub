import axios from 'axios';

const LOAD_MISSIONS = 'App/missions/LOAD_MISSIONS';
const url = 'https://api.spacexdata.com/v3/missions';

const initialState = [];

const loadMissions = (payload) => ({
  type: LOAD_MISSIONS,
  payload,
});

export const getMissions = () => async (dispatch) => {
  const missions = await axios.get(url).then((response) => response.data);
  if (missions) {
    dispatch(loadMissions(missions));
  }
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MISSIONS:
      return action.payload;
    default:
      return state;
  }
};

export default missionsReducer;
