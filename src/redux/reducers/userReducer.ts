import ActionTypes from "../ActionType";

const initialState = {
  isLogin: false,
};
const userReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case ActionTypes.SET_LOGIN_DATA:
      return {
        isLogin: true,
        ...action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
