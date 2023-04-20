import { createContext, useContext, useState } from "react";

const Context = createContext();
export const useCustomContext = () => useContext(Context);

export const AppContext = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  
  return (
    <Context.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </Context.Provider>
  );
}