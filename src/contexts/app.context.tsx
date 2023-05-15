import { STORAGE_KEY } from "@shared-constants";
import { createContext, useEffect, useState } from "react";
import { User } from "types/user.type";
import { asyncStorage } from "utils/storage";

interface AppContextInterface {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  profile: User | null;
  setProfile: React.Dispatch<React.SetStateAction<User | null>>;
}

const initialAppContext: AppContextInterface = {
  isAuthenticated: Boolean(null),
  setIsAuthenticated: () => null,
  profile: null,
  setProfile: () => null,
};

export const AppContext = createContext<AppContextInterface>(initialAppContext);
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    initialAppContext.isAuthenticated,
  );
  const [profile, setProfile] = useState<User | null>(
    initialAppContext.profile,
  );

  const checkAuthentication = async () => {
    const accessToken = await asyncStorage.getValue(STORAGE_KEY.ACCESS_TOKEN);
    setIsAuthenticated(Boolean(accessToken));
  };

  useEffect(() => {
    checkAuthentication();
  }, []);

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        profile,
        setProfile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
