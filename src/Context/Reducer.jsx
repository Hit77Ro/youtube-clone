//Reducer.jsx
export const Actions = {
  ToggleSidebar: "ToggleSidebar",
  SetMedia: "setMedia",
  ToggleSearchMode: "toggleSearchMode",
  SetLoader: "setLoader",
  setChannelVideos: "setChannelVideos",
  setChannelAbout: "setChannelAbout",
  setChannelHome: "setChannelHome",
  setChannelCommunity: "setChannelCommunity",
  setChannelChannels: "setChannelChannels",
};
export default function reducer(state, action) {
  switch (action.type) {
    case Actions.ToggleSidebar:
      return {
        ...state,
        isSidebarOpen: action.payload,
      };
    case Actions.SetMedia:
      return {
        ...state,
        medias: action.payload,
      };
    case Actions.setChannelAbout:
      return {
        ...state,

        aboutData: { ...state.aboutData, ...action.payload },
      };
    case Actions.setChannelChannels:
      return {
        ...state,

        channelsData: { ...state.channelsData, ...action.payload },
      };
    case Actions.setChannelCommunity:
      return {
        ...state,

        communityData: { ...state.communityData, ...action.payload },
      };
    case Actions.setChannelHome:
      return {
        ...state,

        homeData: { ...state.homeDate, ...action.payload },
      };
    case Actions.setChannelVideos:
      return {
        ...state,

        videosData: { ...state.videosData, ...action.payload },
      };

    default:
      return state;
  }
}

console.log