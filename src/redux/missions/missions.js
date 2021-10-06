import axios from 'axios';

const LOAD_MISSIONS = 'App/missions/LOAD_MISSIONS';
const JOIN_MISSION = 'App/missions/JOIN_MISSION';
const url = 'https://api.spacexdata.com/v3/missions';

const initialState = [];

const loadMissions = (payload) => ({
  type: LOAD_MISSIONS,
  payload,
});

export const joinMission = () => async (dispatch) => {
const joining = await.post
}

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
      case JOIN_MISSIONS:
        return(..)
    default:
      return state;
  }
};

export default missionsReducer;
