import ReactPlayer from "react-player";
import Loader from "../../utils/Loader";
import ChannelVideoCard from "./ChannelVideoCard";
import VideoListing from "./VideoListing";

const ChannelHome = ({ homeData }) => {
  const { data } = homeData;
  if (homeData.length <= 0) return <Loader styling="absolute" />;
  const Player = ({ item }) => (
    <div className="player-wrapper flex flex-1 gap-4 overflow-hidden  rounded-xl ">
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
   <div className="flex flex-col gap-10">
     {data.map(
       (el) =>
         el.type === "player" ? (
           <Player item={el} />
         ) : el.type === "video_listing" ? (
         <VideoListing  data={el} />
         ) : null, // You can add another null here for clarity
     )}
   </div>
 );

};

export default ChannelHome;
