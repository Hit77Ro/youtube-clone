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
        className="mt-2 flex items-center gap-1 text-[11px] leading-6 sm:text-sm"
      >
        {" "}
        {searchmode && (
          <span className=" block h-[20px] w-[20px] shrink-0 overflow-hidden  rounded-full">
            <img src={url} alt="channelAvatar" />
            <img src={url || "https://placehold.co/400"} alt="channelAvatar" />
          </span>
        )}
        <span title={channelTitle}>{channelTitle} </span>
        <span className="text-[13px] hidden md:block">{<AiFillCheckCircle />} </span>
      </Link>
    );
  };
  console.log(item);
  const Img = () => (
    <Link
      to={`/channel/${channelId}`}
      className={` block h-[25px]  w-[25px] shrink-0  self-start overflow-hidden rounded-full  xs:h-[30px]  xs:w-[30px] ${styles.flexCenter}`}
    >
      <img src={url} className="object-contain" alt="channelAvatar" />
    </Link>
  );
  return (
    <div
      className={`grid  overflow-hidden   ${
        isSearchMode
          ? "  mx-auto  max-h-[200px] overflow-hidden grid-rows-[1fr] xs:grid-cols-[40%,60%]  md:max-w-[900px] "
          : "grid-cols-1 rounded-md xs:rounded-lg   xs:shadow-md"
      }`}
    >
      {/* image */}
      <Link
        to={`/watch/${videoId}`}
        className={` relative flex  w-full overflow-hidden ${
          isSearchMode && "rounded-lg"
        } `}
      >
        <img
          src={url2 || url1}
          alt={title}
          className={`${isSearchMode && " flex-1  "}`}
        />
        <span className="absolute bottom-1 right-1 rounded-md bg-black px-2 py-1 text-xs text-white ">
          {" "}
          {lengthText}{" "}
        </span>
      </Link>
      {/* content start */}
      <div className="px-3 py-2">
        <div className={`${styles.centerX} gap-2`}>
          {!isSearchMode && <Img />}
          <Link to={`/watch/${videoId}`}>
            <h3
              title={title}
              className="md:text-md text-xs text-slate-800 sm:text-sm"
            >
              {" "}
              {title}
            </h3>
          </Link>
        </div>

        <div className="flex flex-col text-[15px] text-slate-700">
          {/* todo reverse when searchmode */}
          <div
            className={`flex  text-xs text-slate-600 sm:text-sm  ${
              isSearchMode ? "md:flex-col-reverse" : "md:flex-col items-center md:items-start  gap-3"
            }`}
          >
            {/* channelimage */}
            <ChannelImg searchmode={isSearchMode} />
            <div className={` flex items-center text-[10px] md:text-sm`}>
              <span className=" flex items-center gap-2 ">
                <span title={viewCount}> {formatNumber(+viewCount)}</span> views
              </span>
              <span className="">
                {" "}
                <BsDot />{" "}
              </span>
              <span title={publishDate}> {publishedTimeText} </span>
            </div>
          </div>
          {isSearchMode && description && (
            <p title="from description" className="mt-2 text-[10px] md:text-sm">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
