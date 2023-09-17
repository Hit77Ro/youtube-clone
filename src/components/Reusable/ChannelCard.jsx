import { BsCheckCircleFill, BsDot } from "react-icons/bs";
import styles from "../../style";
import { Link } from "react-router-dom";

const ChannelCard = ({ item }) => {
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
      className={`grid  grid-cols-[40%,60%] gap-1  py-4 transition-all  md:grid-cols-[1fr,1fr]   `}
    >
      <div className={`  ${styles.flexCenter}`}>
        <img
          src={"https:" + url2 || url1}
          className=" max-h-[80px] max-w-[80px] rounded-full"
          alt="channel image"
        />
      </div>
      <div className="flex flex-col gap-y-1 text-sm text-slate-700">
        <span>
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
        <p className="mt-1 text-[10px] md:text-sm">{description}</p>
      </div>
    </Link>
  );
};

export default ChannelCard;