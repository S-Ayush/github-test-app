import ActionTypes from "../ActionType";

const initialState: any = [];
const starReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case ActionTypes.SET_STARED_REPOS:
      return [...action.payload];
    case ActionTypes.STAR_REPO:
      return [{ ...action.payload }, ...state];
    case ActionTypes.UNSTAR_REPO:
      let _state = [...state];
      _state.splice(
        state.findIndex((repo: any) => repo.id === action.payload),
        1
      );
      return [..._state];
    default:
      return state;
  }
};
export default starReducer;
