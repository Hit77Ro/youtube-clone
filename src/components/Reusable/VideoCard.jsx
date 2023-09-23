import { BsDot } from "react-icons/bs";
import { getImg } from "../../utils";
import styles from "../../style";
import { Link } from "react-router-dom";
import { formatViews } from "../../utils/youtube";

const VideoCard = ({ item }) => {
  if (!item.thumbnail) return;
  const {
    videoId,
    title,
    channelTitle,
    channelId,
    channelThumbnail,
    description,
    viewCount,
    publishDate,
    publishedTimeText,
    lengthText,
    isLive,
    thumbnail,
  } = item;
  console.log(item);
  return (
    <div>
      <div className="flex">
        <Link className="flex-1" to={`/watch/${videoId}`}>
          <img
            src={getImg(thumbnail, 2)}
            alt="video thumbnail"
            className=" object-contain sm:rounded-xl"
          />
        </Link>
      </div>

      {/* Content */}
      <div className={`flex items-start  gap-2 py-2`}>
        {/* mini channel image */}
        <div className="shrink-0">
          <img
            src={getImg(channelThumbnail, 3)}
            alt="channel thumbnail"
            className="w-[27px] rounded-full"
          />
        </div>

        {/* video details */}

        <div className="text-sm text-slate-700  sm:text-base">
          <h3 className="mb-2 text-slate-800 " title={title}>
            {title}
          </h3>
          <h4 className={`flex-wrap gap-1  text-[12px]   ${styles.centerX}`}>
            <span>{channelTitle}</span>
          </h4>
          <h5 className={` ${styles.centerX}`}>
            <span> {formatViews(+viewCount)} views </span>
            <BsDot />
            <span>{publishedTimeText}</span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
