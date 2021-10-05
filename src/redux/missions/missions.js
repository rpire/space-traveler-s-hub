const GET_MISSIONS = 'App/rockets/GET_MISSIONS';

const initialState = ['initial state for missions'];

export const setBookList = () => ({
  type: GET_MISSIONS,
});

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return state;
    default:
      return state;
  }
};

export default missionsReducer;
