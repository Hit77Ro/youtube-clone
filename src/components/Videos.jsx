import { useStore } from "../Context/Context";
import styles from "../style";
import VideosPlaylist from "./VideosPlaylist";
import VideoCard from "./VideoCard";
import Loader from "../utils/Loader";
import { ChannelCard, ShortsListing } from "./Channel";

const Videos = ({ medias }) => {
  const { isSearchMode } = useStore();
  if (medias.length <= 0) return <Loader />;
  return (
    <div
      className={` grid gap-2 xs:gap-4 gap-y-7
      ${
        isSearchMode
          ? "grid-cols-1 xl:mx-auto "
          : " xs:grid-cols-[repeat(auto-fit,minmax(240px,1fr))] "
      }
        `}
    >
      {isSearchMode
        ? medias.map((item, idx) =>
            item.videoId ? (
              <VideoCard key={idx + crypto.randomUUID()} item={item} />
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
