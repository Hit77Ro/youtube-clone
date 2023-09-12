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
      className={`flex flex-col  max-w-[300px] mx-auto  overflow-hidden rounded-xl shadow-md  ${
        isSearchMode ? "gap-x-10  md:max-h-fit" : ""
      }`}
    >
      {/* image */}
      <Link to={`/watch/${videoId}`} className={`block basis-2/4 `}>
        <div className="relative  w-full overflow-hidden ">
          <img src={url2 || url1} alt={title} />
          <span className="absolute bottom-1 right-1 rounded-md bg-black px-2 py-1 text-xs text-white ">
            {" "}
            {lengthText}{" "}
          </span>
        </div>
      </Link>
      {/* content start */}
      <div className="basis-2/4 py-2 pl-1">
        <div className={`${styles.centerX} gap-2`}>
          {!isSearchMode && <Img />}
          <Link to={`/watch/${videoId}`}>
            <h3 title={title} className="md:text-md text-sm">
              {" "}
              {title.split(" ").length <= 10
                ? title
                : title.split(" ", 10).join(" ") + "..."}{" "}
            </h3>
          </Link>
        </div>

        <div className=" flex flex-col px-4 text-[15px] text-slate-700">
          {/* todo reverse when searchmode */}
          <div
            className={`flex text-[13px] text-slate-600 sm:text-sm  ${
              isSearchMode ? "flex-col-reverse" : "flex-col"
            }`}
          >
            {/* channelimage */}
            <ChannelImg searchmode={isSearchMode} />
            <div className={`gap flex items-center`}>
              <span className="mt-1 flex items-center gap-2 ">
                <span title={viewCount}> {formatNumber(+viewCount)}</span> views
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
  );
};

export default VideoCard;
