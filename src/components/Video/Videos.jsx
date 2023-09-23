import styles from "../../style";
import Loader from "../../utils/Loader";
import { VideoCard } from "../Reusable";

const Videos = ({ data, direction }) => {
  const videos = data;
  if (!data) return <Loader />;

  return (
    <div
      className={`${
        direction ? "mx-auto grid items-start gap-3" : styles.grid
      }`}
    >
      {videos.map(
        (el) =>
          el.type === "video" && (
            <VideoCard direction={direction || ""} item={el} />
          ),
      )}
    </div>
  );
};

export default Videos;
