import Loader from "../../utils/Loader";
import { ChannelCard, ShortsListing } from "../Channel";
import VideoCard from "../Reusable/VideoCard";
import VideosPlaylist from "./VideosPlaylist";

const Videos = ({ medias, isSearchMode }) => {
  if (medias.length <= 0) return <Loader />;
  return (
    <div
      className={`grid  gap-3 ${
        isSearchMode
          ? "grid-cols-1"
          : `grid-cols-[repeat(auto-fit,minmax(220px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] `
      }`}
    >
      {isSearchMode
        ? medias.map((item, idx) =>
            item.videoId ? (
              <VideoCard
                isSearchMode={isSearchMode}
                key={idx + crypto.randomUUID()}
                item={item}
              />
            ) : item.type === "channel" ? (
              <ChannelCard key={idx + crypto.randomUUID()} item={item} />
            ) : item.type === "video_listing" ? (
              <VideosPlaylist key={idx + crypto.randomUUID()} item={item} />
            ) : item.type === "shorts_listing" ? (
              <ShortsListing key={idx + crypto.randomUUID()} item={item} />
            ) : (
              ""
            ),
          )
        : medias.map(
            (item, idx) =>
              item.videoId && (
                <VideoCard key={idx + crypto.randomUUID()} item={item} />
              ),
          )}
    </div>
  );
};

export default Videos;