import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const Context = createContext();
export const useCustomContext = () => useContext(Context);

export const AppContext = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Context.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </Context.Provider>
  );
};

AppContext.propTypes = {
  children: PropTypes.element,
};
