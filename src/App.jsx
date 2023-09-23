import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Sidebar,
  Hero,
  VideoDetails,
  SearchDetails,
  Navbar,
  ChannelDetails,
  Explore,
} from "./components";
import { useStore } from "./Context/Context";
import {
  About,
  Channels,
  Home,
  LiveStreams,
  Playlists,
  Shorts,
  ChannelVideos,
  Community,
} from "./components/Channel";

const App = () => {
  const { isSidebarOpen, isSearchMode } = useStore();
  return (
    <Router>
      <div
        className={`  pt-[70px]  transition-[0.5s] ${
          isSidebarOpen ? "lg:ml-[240px]" : ""
        } 
          ${isSearchMode ? "md:container" : ""} 
        `}
      >
        <div
          className={`lg:hidden  ${isSidebarOpen ? "overlay active" : ""}`}
        />
        <div className="mx-auto max-w-[1600px]">
          <Navbar />
          <Sidebar />
          <Routes>
            <Route path="/" exact element={<Hero />} />
            <Route path="/explore/:category" exact element={<Explore />} />
            <Route
              path="/search/:searchTerm"
              exact
              element={<SearchDetails />}
            />
            <Route path="/watch/:id" exact element={<VideoDetails />} />
            <Route path="/channel/:id" exact element={<ChannelDetails />}>
              <Route path="" element={<Home />} />
              <Route path="videos" element={<ChannelVideos />} />
              <Route path="shorts" element={<Shorts />} />
              <Route path="playlists" element={<Playlists />} />
              <Route path="channels" element={<Channels />} />
              <Route path="live" element={<LiveStreams />} />
              <Route path="about" element={<About />} />
              <Route path="community" element={<Community />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
