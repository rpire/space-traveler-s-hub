import axios from 'axios';

const LOAD_MISSIONS = 'App/missions/LOAD_MISSIONS';
const JOIN_MISSIONS = 'App/missions/JOIN_MISSIONS';
const LEAVE_MISSIONS = 'App/missions/LEAVE_MISSIONS';
const url = 'https://api.spacexdata.com/v3/missions';

const initialState = [];

const loadMissions = (payload) => ({
  type: LOAD_MISSIONS,
  payload,
});

export const joinMission = (id) => ({
  type: JOIN_MISSIONS,
  id,
});

export const joinMission = (id) => ({
  type: LEAVE_MISSIONS,
  id,
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
    case JOIN_MISSIONS:
      return state.map((mission) => {
        if (mission.mission_id !== action.id) {
          return mission;
        }
        return { ...mission, reserved: true };
      });
      case LEAVE_MISSIONS:
      return state.map((mission) => {
        if (mission.mission_id !== action.id) {
          return mission;
        }
        return { ...mission, reserved: false };
      });
    default:
      return state;
  }
};

export default missionsReducer;
