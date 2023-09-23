//Reducer.jsx
export const Actions = {
  ToggleSidebar: "ToggleSidebar",
  setHero: "setMedia",
  ToggleSearchMode: "toggleSearchMode",
  SetLoader: "setLoader",
  setVideos: "setVideos",
  setAbout: "setAbout",
  setHome: "setHome",
  setCommunity: "setCommunity",
  setChannels: "setChannels",
};

export default function reducer(state, action) {
  switch (action.type) {
    case Actions.ToggleSidebar:
      return {
        ...state,
        isSidebarOpen: action.payload,
      };
    case Actions.setHero:
      const updated = { ...state.heroData };

      return {
        ...state,
        heroData: Updater(updated, action),
      };
    case Actions.setAbout:
      return {
        ...state,

        aboutData: [...state.aboutData, ...action.payload],
      };
    case Actions.setChannels:
      return {
        ...state,

        channelsData: [...state.channelsData, ...action.payload],
      };
    case Actions.setCommunity:
      return {
        ...state,

        communityData: [...state.communityData, ...action.payload],
      };
    case Actions.setHome:
      return {
        ...state,

        homeData: [...state.homeDate, ...action.payload],
      };
    case Actions.setVideos:
      return {
        ...state,

        videosData: [...state.videosData, ...action.payload],
      };

    default:
      return state;
  }
}
const Updater = (updatedData, action) => {
  for (const key in action.payload) {
    if (action.payload.hasOwnProperty(key)) {
      if (Array.isArray(action.payload[key])) {
        updatedData[key] = [
          ...(updatedData[key] || []),
          ...action.payload[key],
        ];
      }
    }
  }
  return updatedData;
};
