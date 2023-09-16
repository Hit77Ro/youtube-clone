import { useEffect } from "react";
import Loader from "../../utils/Loader";
import useChannelFetcher from "../../utils/useChannelFetcher";
import ChannelVideoCard from "./ChannelVideoCard";
import styles from "../../style";

const ChannelVideos = () => {
  const { data, id } = useChannelFetcher("videos");
  if (!data) return <Loader />;
  const videos = data.data;
  return (
    <div>
      {videos.length <= 0 && <h1> {data.msq}</h1>}

      {videos.length > 0 && (
        <div className={styles.grid}>
          {videos.map((el) => (
            <div className=" " key={crypto.randomUUID()}>
              <ChannelVideoCard item={el} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChannelVideos;
