//Reducer.jsx
export const Actions = {
  ToggleSidebar: "ToggleSidebar",
  SetMedia: "setMedia",
  ToggleSearchMode: "toggleSearchMode",
  SetLoader: "setLoader",
  
};
export default function reducer(state, action) {
  switch (action.type) {
    case Actions.ToggleSidebar:
      return {
        ...state,
        isSidebarOpen: action.payload
      };
    case Actions.SetMedia:
      return {
        ...state,
        medias: action.payload
      };
    case Actions.ToggleSearchMode:
      return {
        ...state,
        isSearchMode: action.payload
      };
    case Actions.SetLoader:
      return {
        ...state,
        isLoading: action.payload
      };
    default:
      return state;
  }
}
