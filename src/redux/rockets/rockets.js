const GET_ROCKETS = 'App/rockets/GET_ROCKETS';

const initialState = ['initial state for rockets'];

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return state;
    default:
      return state;
  }
};

export const setBookList = () => ({
  type: GET_ROCKETS,
});

export default rocketsReducer;
