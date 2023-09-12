import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Sidebar,
  Home,
  VideoDetails,
  SearchDetails,
  Navbar,
  ChannelDetails,
  Explore,
} from "./components";
import { useStore } from "./Context/Context";
import {
  ChannelAbout,
  ChannelChannels,
  ChannelLive,
  ChannelPlaylists,
  ChannelShorts,
  ChannelVideos,
} from "./components/Channel";
import ChannelCommunity from "./components/Channel/ChannelCommunity";

const App = () => {
  const { isSidebarOpen } = useStore();
  return (
    <Router>
      <div
        className={`mx-auto  pt-[70px]  transition-all max-w-[1450px] ${
          isSidebarOpen ? "md:ml-[240px]" : ""
        }`}
      >
        <div
          className={`lg:hidden  ${isSidebarOpen ? "overlay active" : ""}`}
        />
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/explore/:category" exact element={<Explore />} />
          <Route path="/search/:searchTerm" exact element={<SearchDetails />} />
          <Route path="/watch/:id" exact element={<VideoDetails />} />
          <Route path="/channel/:id" exact element={<ChannelDetails />}>
            <Route path="videos" element={<ChannelVideos />} />
            <Route path="shorts" element={<ChannelShorts />} />
            <Route path="playlists" element={<ChannelPlaylists />} />
            <Route path="channels" element={<ChannelChannels />} />
            <Route path="live" element={<ChannelLive />} />
            <Route path="about" element={<ChannelAbout />} />
            <Route path="community" element={<ChannelCommunity />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
