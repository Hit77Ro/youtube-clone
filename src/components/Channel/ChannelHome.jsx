import ReactPlayer from "react-player";
import Loader from "../../utils/Loader";
import VideoListing from "./VideoListing";
import useChannelFetcher from "../../utils/useChannelFetcher";

const ChannelHome = ({}) => {
  const { data: obj, id } = useChannelFetcher("home");
  if (!obj) return <Loader styling="absolute" />;
  const Player = ({ item }) => (
    <div className="player-wrapper flex flex-1 gap-4 overflow-hidden  rounded-md md:rounded-lg ">
      <div className="relative flex min-h-[300px] w-full flex-1">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=` + item.videoId}
          width="100%"
          height="100%"
          controls
          className="react-player "
        />
      </div>
    </div>
  );
  return (
    <div className="flex flex-col">
      {obj.data.map(
        (el) =>
          el.type === "player" ? (
            <Player item={el} key={crypto.randomUUID()} />
          ) : el.type === "video_listing" ? (
            <VideoListing data={el} key={crypto.randomUUID()} />
          ) : null, // You can add another null here for clarity
      )}
    </div>
  );
};

export default ChannelHome;
