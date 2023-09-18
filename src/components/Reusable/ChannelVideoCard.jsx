import { BsDot } from "react-icons/bs";
import { formatNumber } from "../../utils/youtube";
import styles from "../../style";
import { Link } from "react-router-dom";

const ChannelVideoCard = ({ item, extra, channelTitle, direction }) => {
  console.log(item);
  // if (!item.title) return;
  const { lengthText, publishedTimeText, videoId, isLive, title, viewCount } =
    item;
  return (
    <Link
      to={`/watch/${videoId}`}
      className={`grid h-full min-h-[100px] ${direction} gap-1  overflow-hidden rounded-md `}
    >
      <div className="relative overflow-hidden">
        <img
          className="w-full rounded-lg  "
          src={
            item?.thumbnail[3]?.url ||
            item?.thumbnail[2]?.url ||
            item?.thumbnail[1]?.url ||
            item?.thumbnail[0]?.url
          }
          alt="video poster image"
        />
        {lengthText && (
          <span className="absolute bottom-1 right-1 rounded-md bg-black p-1 text-xs  text-slate-300 ">
            {" "}
            {lengthText}{" "}
          </span>
        )}
      </div>
      <div className="p-2 pb-4">
        <h3 title={title} className="text-sm text-slate-700">
          {" "}
          {!title
            ? " This video isn't publicly available "
            : title?.split(" ", 5).join(" ") + "..."}
        </h3>
        {channelTitle && (
          <span className="text-slate-500"> {channelTitle} </span>
        )}

        {viewCount && (
          <p className={` flex flex-wrap gap-1 mt-2 text-[11px]  sm:text-xs  text-slate-600 ${styles.centerX}`}>
            <span> {formatNumber(viewCount)} views </span>
            {!isLive && publishedTimeText && (
              <>
                <BsDot />
                <span> {publishedTimeText} </span>
              </>
            )}
          </p>
        )}
        {extra?.description && (
          <p title="form description" className="mt-2 text-xs  text-slate-700">
            {" "}
            {extra.description.split(" ", 10).join(" ").slice(0, 60) +
              "..."}{" "}
          </p>
        )}
      </div>
    </Link>
  );
};

export default ChannelVideoCard;
