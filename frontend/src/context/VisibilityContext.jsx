import { createContext, useContext, useState } from 'react';

const VisibilityContext = createContext();

export const VisibilityProvider = ({ children }) => {
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  const showMessages = () => setIsMessageVisible(true);
  const hideMessages = () => setIsMessageVisible(false);

  return <VisibilityContext.Provider value={{ isMessageVisible, showMessages, hideMessages }}>{children}</VisibilityContext.Provider>;
};

export const useVisibility = () => {
  return useContext(VisibilityContext);
};
