import { BsDot } from "react-icons/bs";
import { formatNumber } from "../../utils/youtube";
import styles from "../../style";
import { Link } from "react-router-dom";
import getImg from "../../utils/getImg";

const ChannelVideoCard = ({ item, extra, channelTitle, direction }) => {
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
          src={getImg(item?.thumbnail, 5)}
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
          <p
            className={` mt-2 flex flex-wrap gap-1 text-[11px]  text-slate-600  sm:text-xs ${styles.centerX}`}
          >
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
            {extra?.description}{" "}
          </p>
        )}
      </div>
    </Link>
  );
};

export default ChannelVideoCard;
