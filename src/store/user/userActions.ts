import { SETCURRENTUSER } from "./userActionTypes";
import { User } from "firebase/auth";
import { createAction } from "@/utils/reducers";

const setCurrentUser = (user: User | null) => {
  return createAction<string, User | null>(SETCURRENTUSER, user);
};

export { setCurrentUser };
