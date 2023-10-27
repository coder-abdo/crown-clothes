import { FC, ReactNode, createContext, useContext, useState } from "react";
import { IContext } from "@/types";
import { User } from "firebase/auth";
interface Props {
  children: ReactNode;
}

const UserContext = createContext<IContext>({
  currentUser: null,
  setCurrentUser: () => null,
});

const UserProvider: FC<Props> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useCurrentUser = () => useContext(UserContext);
export default UserProvider;
