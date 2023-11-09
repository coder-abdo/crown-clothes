import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { IUserContext } from "@/types";
import { User } from "firebase/auth";
import { createUserFromAuth, handleAuthChange } from "@/utils/firebase";
interface Props {
  children: ReactNode;
}

const UserContext = createContext<IUserContext | null>(null);

const UserProvider: FC<Props> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  useEffect(() => {
    const unsubscribe = handleAuthChange((user) => {
      if (user) {
        createUserFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useCurrentUser = (): IUserContext | null =>
  useContext(UserContext);
export default UserProvider;
