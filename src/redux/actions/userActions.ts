import ActionTypes from "../ActionType";

const UserAction = {
  setLoginData: (data: any) => {
    return {
      type: ActionTypes.SET_LOGIN_DATA,
      payload: data,
    };
  },
};

export default UserAction;
