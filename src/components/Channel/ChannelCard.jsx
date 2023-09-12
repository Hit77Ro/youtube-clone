import { BsCheckCircleFill, BsDot } from "react-icons/bs";
import styles from "../../style";
import { Link } from "react-router-dom";
import { useStore } from "../../Context/Context";

const ChannelCard = ({ item }) => {
  const { isSearchMode } = useStore();
  if (!item) return;
  const {
    subscriberCount,
    title,
    channelId,
    description,
    thumbnail: [{ url: url1 }, { url: url2 } = false],
  } = item;
  return (
    <Link
      to={`/channel/${channelId}`}
      className={`grid gap-6 p-3 shadow-sm transition-all hover:shadow-md md:max-h-fit ${
        isSearchMode ? "sm:grid-cols-2" : ""
      } `}
    >
      <div className={`overflow-hidden rounded-full ${styles.flexCenter}`}>
        <img
          src={"https:" + url2 || url1}
          className=" aspect-square max-w-[200px] rounded-full"
          alt="channel image"
        />
      </div>
      <div className="flex flex-col gap-y-1 text-sm text-slate-700">
        <span className={`gap-x-3 ${styles.centerX}`}>
          <span className={` gap-3 ${styles.centerX}`}>
            {" "}
            {title}
            <span className="text-[11px]">
              <BsCheckCircleFill />
            </span>
          </span>
        </span>
        <span className={` flex-wrap gap-1 ${styles.centerX}`}>
          {" "}
          @{title}
          <BsDot /> {subscriberCount} subscribers{" "}
        </span>
        <p className="mt-4 text-[12px]">{description}</p>
      </div>
    </Link>
  );
};

export default ChannelCard;
