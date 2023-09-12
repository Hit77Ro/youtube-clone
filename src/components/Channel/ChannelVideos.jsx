import { useEffect } from "react";
import Loader from "../../utils/Loader";
import useChannelFetcher from "../../utils/useChannelFetcher";
import ChannelVideoCard from "./ChannelVideoCard";
import { FetchApi } from "../../utils/api";
import styles from "../../style";

const ChannelVideos = () => {
  const data = useChannelFetcher("videos");
  if (!data) return <Loader />;
  const videos = data.data;
  console.log(data);
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
