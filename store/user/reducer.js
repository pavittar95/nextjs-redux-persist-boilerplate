import * as actions from "./actions";
const initialTimerState = {
  token: undefined,
  user: undefined,
};
const userReducer = (state = initialTimerState, { type, payload }) => {
  switch (type) {
    case actions.LOGIN:
      return {
        token: payload.token,
        user: payload.user,
      };
    case actions.LOGOUT:
      return {
        token: undefined,
        user: undefined,
      };
    default:
      return state;
  }
};

export default userReducer;
