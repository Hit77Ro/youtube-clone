// context.jsx
import { createContext, useContext, useReducer } from "react";

import reducer from "./Reducer";
import { Actions } from "./Reducer";
export const StoreProvider = createContext();
export const useStore = () => useContext(StoreProvider);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    isSidebarOpen: false,
    medias: [],
    homeData: {},
    communityData: {},
    aboutData: {},
    videosData: {},
    channelsData: {},
  });
  return (
    <StoreProvider.Provider value={{ ...state, dispatch, ...Actions }}>
      {children}
    </StoreProvider.Provider>
  );
};
