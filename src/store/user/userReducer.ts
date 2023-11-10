import { User } from "firebase/auth";
import { Reducer } from "redux";

type State = {
  currentUser: User | null;
};
const SETCURRENTUSER = "SET_CURRENT_USER";
type Action = {
  type: string;
  payload: User | null;
};
const initalState: State = {
  currentUser: null,
};
export const userReducer: Reducer<State, Action> = (
  state = initalState,
  action,
): State => {
  const { type, payload } = action;
  switch (type) {
    case SETCURRENTUSER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};
