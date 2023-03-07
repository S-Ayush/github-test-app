import ActionTypes from "../ActionType";

const StarActions = {
  setStaredRepos: (data: any) => {
    return {
      type: ActionTypes.SET_STARED_REPOS,
      payload: data,
    };
  },
  starRepo: (data: any) => {
    return {
      type: ActionTypes.STAR_REPO,
      payload: data,
    };
  },
  unstarRepo: (data: any) => {
    return {
      type: ActionTypes.UNSTAR_REPO,
      payload: data,
    };
  },
};

export default StarActions;
