import { Link } from "react-router-dom";
import { formatNumber } from "../../utils/youtube";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import styles from "../../style";

const VideoCard = ({ item, isSearchMode }) => {
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
    isLive,
    thumbnail: [{ url: url1 }, { url: url2 } = false],
  } = item;
  const ChannelImg = () => {
    return (
      <Link
        to={`/channel/${channelId}`}
        className=" flex items-center gap-1 text-[11px] leading-6 sm:text-sm"
      >
        {" "}
        {isSearchMode && (
          <span className=" block h-[30px] w-[30px] shrink-0 overflow-hidden  rounded-full">
            <img src={url} alt="channelAvatar" />
            <img src={url || "https://placehold.co/400"} alt="channelAvatar" />
          </span>
        )}
        <span title={channelTitle}>{channelTitle} </span>
        <span className="hidden text-[13px] md:block">
          {<AiFillCheckCircle />}{" "}
        </span>
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
      className={`gap-2     
      ${isSearchMode && " gap-5 xs:flex"}`}
    >
      {/* image */}
      <Link
        to={`/watch/${videoId}`}
        className={`relative flex max-h-[200px] min-h-[100px] shrink-0 overflow-hidden
       rounded-lg   md:rounded-2xl ${
         isSearchMode && " basis-2/4  sm:max-w-[300px]"
       } `}
      >
        <img src={url2 || url1} alt={title} />
        <span className="absolute bottom-1 right-1 rounded-md bg-black object-contain px-2 py-1 text-xs text-white ">
          {" "}
          {lengthText}{" "}
        </span>
      </Link>
      {/* content start */}
      <div className=" flex-1 py-2">
        <div className={`${styles.centerX}  gap-2`}>
          {!isSearchMode && <Img />}
          <div className="">
            <Link to={`/watch/${videoId}`}>
              <h3
                title={title}
                className="lg:text-md text-xs text-slate-800 md:text-sm"
              >
                {" "}
                {!isSearchMode ? title.split(" ", 10).join(" ") : title}
              </h3>
            </Link>
            <div
              className={`mt-1 flex flex-wrap gap-1  text-xs text-slate-600 md:text-sm  ${
                isSearchMode
                  ? "md:flex-col-reverse"
                  : "items-center gap-2 md:flex-col md:items-start"
              }`}
            >
              {/* channelimage */}

              <ChannelImg />
              <div className={` flex items-center  text-[10px] md:text-sm`}>
                <span className=" flex items-center gap-1 ">
                  <span title={viewCount}> {formatNumber(+viewCount)}</span>{" "}
                  views
                </span>
                {!isLive && publishedTimeText && (
                  <>
                    <BsDot />
                    <span title={publishDate}> {publishedTimeText} </span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col text-[15px] text-slate-700">
          {/* todo reverse when searchmode */}

          {isSearchMode && description && (
            <p
              title="from description"
              className="mt-2 hidden text-[10px] md:block md:text-sm"
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
