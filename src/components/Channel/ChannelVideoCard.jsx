import { BsDot } from "react-icons/bs";
import { formatNumber } from "../../utils/youtube";
import styles from "../../style";

const ChannelVideoCard = ({ item, channelTitle }) => {
  const { lengthText, publishedTimeText, isLive, title, viewCount } = item;
  return (
    <div className="grid h-full min-h-[100px] grid-cols-[45%,55%] gap-1  overflow-hidden rounded-md xs:grid-cols-1 xs:rounded-xl xs:shadow-md">
      <div className="relative overflow-hidden">
        <img
          className="w-full rounded-md xs:rounded-none "
          src={
            item?.thumbnail[3]?.url ||
            item?.thumbnail[2]?.url ||
            item?.thumbnail[1]?.url ||
            item?.thumbnail[0]?.url
          }
          alt="video poster image"
        />
        <span className="absolute bottom-1 right-1 rounded-md bg-black p-1 text-xs  text-slate-300 ">
          {" "}
          {lengthText}{" "}
        </span>
      </div>
      <div className="p-2 pb-4">
        <h3 title={title} className="text-sm text-slate-700">
          {" "}
          {title.split(" ", 5).join(" ") + "..."}{" "}
        </h3>
        {channelTitle && (
          <span className="text-slate-500"> {channelTitle} </span>
        )}

        {viewCount && (
          <p className={` mt-2 text-xs  text-slate-600 ${styles.centerX}`}>
            <span> {formatNumber(viewCount)} views </span>
            {!isLive && publishedTimeText && (
              <>
                <BsDot />
                <span> {publishedTimeText} </span>
              </>
            )}
          </p>
        )}
      </div>
    </div>
  );
};

export default ChannelVideoCard;
