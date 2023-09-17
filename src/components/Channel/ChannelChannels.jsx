import { Link } from "react-router-dom";
import styles from "../../style";
import Loader from "../../utils/Loader";
import useChannelFetcher from "../../utils/useChannelFetcher";
import { useState } from "react";
import EmptyMessage from "../Reusable/EmptyMessage";


const ChannelChannels = () => {
  const { data, id } = useChannelFetcher("channels");
  const [filterdChannel, setFilteredChannel] = useState("all");
  if (!data) return <Loader styling="absolute h-full w-full" />;

  const channels = data.data;

  const ChannelCard = ({ el }) => (
    <Link
      to={`/channel/${el.channelId}`}
      className={` grow flex-col gap-3 rounded-lg p-4 shadow-md hover:shadow-lg ${styles.flexCenter}`}
    >
      <div className="h-[80px] w-[80px]  overflow-hidden rounded-full">
        <img
          src={
            "https:" + el?.thumbnail[2]?.url ||
            el?.thumbnail[1]?.url ||
            el?.thumbnail[0]?.url ||
            "https://placehold.co/400"
          }
          alt="channel avatar"
          className="h-full w-full object-contain"
        />
      </div>
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-sm"> {el.title} </h3>
        <h4 className=" text-xs text-slate-500">
          {" "}
          {el.subscriberCount} subscribers
        </h4>
      </div>
    </Link>
  );

  // Todo:  Slider
  const ChannelListing = ({ data }) => {
    return (
      <div className="flex basis-full flex-col gap-10 last:mt-10">
        {filterdChannel === "all" && (
          <h3 className="text-xl font-extrabold tracking-wide text-slate-700  ">
            {" "}
            {data.title}{" "}
          </h3>
        )}
        <div className={` ${styles.grid}`}>
          {data.data.map((el, idx) => (
            <ChannelCard key={idx} el={el} />
          ))}
        </div>
      </div>
    );
  };
  const handleChange = (e) => {
    setFilteredChannel(e.target.value);
  };
  return (
    <>
      {data.data.length <= 0 ? (
        <EmptyMessage message={data.msg} />
      ) : (
        <div>
          <select
            name="select channel type"
            onChange={handleChange}
            className="rounded-lg bg-slate-50 p-3  hover:bg-slate-100"
          >
            <option value="all">All Channels</option>
            {channels.map((el) => (
              <option
                key={crypto.randomUUID()}
                className="capitalize"
                value={el.title}
              >
                {" "}
                {el.title}{" "}
              </option>
            ))}
          </select>
          <div className={` mt-[30px] flex flex-wrap gap-3 `}>
            {(filterdChannel === "all"
              ? channels
              : channels.filter((el) => el.title === filterdChannel)
            ).map((el) =>
              el.type === "channel_listing" ? (
                <ChannelListing data={el} key={crypto.randomUUID()} />
              ) : (
                <ChannelCard el={el} key={crypto.randomUUID()} />
              ),
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ChannelChannels;
