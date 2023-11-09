import {
  FC,
  ReactNode,
  Reducer,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import { IUserContext } from "@/types";
import { User } from "firebase/auth";
import { createUserFromAuth, handleAuthChange } from "@/utils/firebase";
interface Props {
  children: ReactNode;
}

const UserContext = createContext<IUserContext | null>(null);
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
const userReducer: Reducer<State, Action> = (state, action): State => {
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
const UserProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initalState);
  const setCurrentUser = (user: User | null) => {
    dispatch({ type: SETCURRENTUSER, payload: user });
  };
  useEffect(() => {
    const unsubscribe = handleAuthChange((user) => {
      if (user) {
        createUserFromAuth(user);
      }
      setCurrentUser(user!);
    });
    return unsubscribe;
  }, []);
  const value = useMemo((): IUserContext => {
    return {
      state,
      setCurrentUser,
    };
  }, [state]);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useCurrentUser = (): IUserContext | null =>
  useContext(UserContext);
export default UserProvider;
