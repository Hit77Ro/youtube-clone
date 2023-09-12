import { Link } from "react-router-dom";
import { formatNumber } from "../utils/youtube";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { useStore } from "../Context/Context";
import styles from "../style";

const VideoCard = ({ item }) => {
  const { isSearchMode } = useStore();
  if (!item || !item.channelThumbnail) {
    return "";
  }
  const {
    videoId,
    title,
    channelTitle,
    channelId,
    channelThumbnail: [{ url }],
    description,
    viewCount,
    publishDate,
    publishedTimeText,
    lengthText,
    thumbnail: [{ url: url1 }, { url: url2 } = false],
  } = item;
  const ChannelImg = ({ searchmode }) => {
    return (
      <Link
        to={`/channel/${channelId}`}
        className="mt-1 flex items-center gap-3"
      >
        {" "}
        {searchmode && (
          <span className=" block h-[25px] w-[25px] shrink-0 overflow-hidden  rounded-full">
            <img src={url} alt="channelAvatar" />
            <img src={url || "https://placehold.co/400"} alt="channelAvatar" />
          </span>
        )}
        <span title={channelTitle}>{channelTitle} </span>
        <span className="text-[13px]">{<AiFillCheckCircle />} </span>
      </Link>
    );
  };
  return (
    <div
      className={` grid grid-rows-[1fr,auto] overflow-hidden rounded-xl shadow-md  transition-all hover:shadow-xl  ${
        isSearchMode ? "gap-x-10 xs:grid-cols-2 md:max-h-fit" : ""
      }`}
    >
      {/* image */}
      <Link to={`/watch/${videoId}`} className={`block`}>
        <div className="relative   w-full  overflow-hidden ">
          <img
            src={url2 || url1}
            alt={title}
            className="  block h-full w-full "
          />
          <span className="absolute bottom-1 right-1 rounded-md bg-black px-2 py-1 text-xs text-white">
            {" "}
            {lengthText}{" "}
          </span>
        </div>
      </Link>
      {/* content start */}
      <div className="py-2">
        <div className="flex  gap-2">
          {!isSearchMode && (
            <Link
              to={`/channel/${channelId}`}
              className={` block h-[30px]  w-[30px] shrink-0  self-start overflow-hidden rounded-full  xs:h-[40px]  xs:w-[40px] ${styles.flexCenter}`}
            >
              <img src={url} alt="channelAvatar" />
            </Link>
          )}

          <div className=" flex flex-col text-[15px] text-slate-700">
            <Link to={`/watch/${videoId}`}>
              <h3 title={title} className="text-sm">
                {" "}
                {title.split(" ").length <= 10
                  ? title
                  : title.split(" ", 10).join(" ") + "..."}{" "}
              </h3>
            </Link>
            {/* todo reverse when searchmode */}
            <div
              className={`flex text-xs text-slate-600 ${
                isSearchMode ? "flex-col-reverse" : "flex-col"
              }`}
            >
              {/* channelimage */}
              <ChannelImg searchmode={isSearchMode} />
              <div className={`gap flex items-center`}>
                <span className="mt-1 flex items-center gap-2 ">
                  <span title={viewCount}> {formatNumber(+viewCount)}</span>{" "}
                  views
                </span>
                <span className="">
                  {" "}
                  <BsDot />{" "}
                </span>
                <span title={publishDate}> {publishedTimeText} </span>
              </div>
            </div>
            {isSearchMode && (
              <p title="from description" className="mt-7 text-[12px]">
                {" "}
                {description}{" "}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
