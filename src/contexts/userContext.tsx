import {
  Context,
  Dispatch,
  FC,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";
import { IUser } from "../types";
interface Props {
  children: ReactNode;
}
interface IContext {
  currentUser: IUser | null;
  setCurrentUser: Dispatch<IUser | null>;
}
const UserContext = createContext(null) as Context<IContext | null>;

const UserProvider: FC<Props> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useCurrentUser = () => useContext(UserContext);
export default UserProvider;
