import { BsDot } from "react-icons/bs";
import { cutText, formatViews, getImg } from "../../utils";
import styles from "../../style";
import { Link } from "react-router-dom";

const VideoCard = ({ item, direction }) => {
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
    <div
      className={`${
        direction ? "grid gap-3 sm:grid-cols-[minmax(200px,300px),1.5fr]" : ""
      }`}
    >
      <div className="flex max-h-[250px]">
        <Link className="w-full" to={`/watch/${videoId}`}>
          <img
            src={getImg(thumbnail, 2)}
            alt="video thumbnail"
            className="  xs:rounded-xl"
          />
        </Link>
      </div>

      {/* Content */}
      <div className={`flex items-start  gap-2 p-2`}>
        {/* mini channel image */}
        {!direction && ChannelImg(channelThumbnail)}

        {/* video details */}

        <div className="sm:sm text-sm  text-slate-700">
          <h3 className="mb-2 text-slate-800 " title={title}>
            {cutText(title, 10)}
          </h3>
          <div
            className={`flex ${direction ? "flex-col-reverse" : "flex-col"}  `}
          >
            <h4
              className={`my-2 flex-wrap gap-1 text-[12px]   ${styles.centerX}`}
            >
              {direction && ChannelImg(channelThumbnail)}
              <span>{channelTitle}</span>
            </h4>
            {!isLive && (
              <h5 className={` ${styles.centerX}`}>
                <span> {formatViews(+viewCount)} views </span>
                <BsDot />
                <span>{publishedTimeText}</span>
              </h5>
            )}
          </div>
          {item?.description && direction && (
            <p className="mt-2 text-xs"> {cutText(item?.description, 10)} </p>
          )}
        </div>
      </div>
    </div>
  );
};

const ChannelImg = (channelThumbnail) => {
  return (
    <div className="shrink-0">
      <img
        src={getImg(channelThumbnail, 3)}
        alt="channel thumbnail"
        className="w-[27px] rounded-full"
      />
    </div>
  );
};
export default VideoCard;
