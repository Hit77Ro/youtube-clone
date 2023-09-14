// context.jsx
import { createContext, useContext, useReducer } from "react";

import reducer from "../components/Reducer";
import { Actions } from "../components/Reducer";
export const StoreProvider = createContext();
export const useStore = () => useContext(StoreProvider);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    isSidebarOpen: false,
    isSearchbarOpen: false,
    medias: [],
    isSearching: false,
    isSearchMode: false,
    isLoading: true,
  });
  return (
    <StoreProvider.Provider value={{ ...state, dispatch, ...Actions }}>
      {children}
    </StoreProvider.Provider>
  );
};
