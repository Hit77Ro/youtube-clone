import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { FetchApi } from "../../utils/api";
import styles, { layout } from "../../style";
import { BiRightArrow } from "react-icons/bi";
import Loader from "../../utils/Loader";
const PossibleTabs = [
  "Videos",
  "Playlists ",
  "Community",
  "Channels",
  "Live",
  "About",
];
import { ChannelHome } from "./index";
import Slider, { Slide } from "../../utils/Slider";
const ChannelDetails = () => {
  const aboutButton = useRef();
  const [Tab, setTab] = useState();
  const [channel, setChannel] = useState();
  const { id } = useParams();
  const isHome = window.location.pathname.endsWith(`/channel/${id}`); // for nested Route

  useEffect(() => {
    const pre = PossibleTabs.find((el) =>
      location.pathname.includes(el.toLowerCase()),
    );
    setTab(pre ? pre : "Home");
  }, [location.pathname]);
  useEffect(() => {
    FetchApi(`channel/home?id=${id}`)
      .then((d) => {
        setChannel(d);
      })
      .catch((error) => console.log(error));
  }, [id]);

  if (!channel) return <Loader />;
  const { meta } = channel;
  const {
    title,
    description,
    channelHandle,
    avatar: [{ url: url1 }, { url: url2 } = false, { url: url3 } = false],
    subscriberCountText,
    videosCount,
    tabs,
  } = meta;
  const Button = ({ el }) => {
    const linkStyles = ` rounded-md border block px-2 py-1 text-center text-slate-500  transition-[.5s] ${
      Tab === el
        ? " border-red-800 bg-red-600 text-white hover:bg-red-600"
        : "border-slate-300 hover:bg-slate-200"
    } `;
    return el !== "About" ? (
      <NavLink
        to={`/channel/${id}${el === "Home" ? "" : "/" + el.toLowerCase()}`}
        key={el}
        className={linkStyles}
      >
        {el}
      </NavLink>
    ) : (
      <NavLink
        to={`/channel/${id}/about`}
        key={el}
        className={linkStyles}
        ref={aboutButton}
      >
        {el}
      </NavLink>
    );
  };
  return (
    <div className={`min-h-screen ${styles.paddingX}`}>
      {meta.banner.length >= 0 && (
        <div className="flex h-[100px] overflow-hidden rounded-md lg:h-[300px]">
          <img
            className="h-full flex-1"
            src={
              meta?.banner[5]?.url ||
              meta?.banner[4]?.url ||
              meta?.banner[3]?.url ||
              meta?.banner[2]?.url ||
              meta?.banner[1]?.url ||
              meta?.banner[0]?.url
            }
            alt=""
          />
        </div>
      )}
      <div className={`${styles.paddingX}`}>
        <div className={`mt-[40px]  flex  flex-col items-center sm:flex-row`}>
          <div
            className={` max-w-[80px] overflow-hidden rounded-full md:max-w-[100px]  ${styles.flexCenter}`}
          >
            <img src={url3 || url2 || url1} alt="" className="object-contain" />
          </div>
          <div className=" flex flex-col gap-2 p-4 text-slate-600">
            <h2 className="text-lg text-slate-700"> {title} </h2>
            <p className={`flex flex-wrap gap-2  ${styles.centerX}`}>
              <span> {channelHandle} </span>
              <span> {subscriberCountText} subscribers </span>
              <span> {videosCount || 0} videos </span>
            </p>
            <Link
              to={`/channel/${id}/about`}
              className={`max-w-[540px]  text-left text-sm ${styles.centerX}`}
              onClick={(e) => aboutButton.current?.scrollIntoView()}
            >
              {description.split(",", 1).join(",") + "..."}
              <span className="text-2xl text-slate-500">
                <BiRightArrow />
              </span>
            </Link>
          </div>
        </div>
        <div className="mx-auto my-5 md:mx-0">
          <Slider>
            <Slide responsive="xs:basis-2/6 md:basis-2/12">
              <div className="px-2">
                <Button el={"Home"} />
              </div>
            </Slide>
            {tabs.map(
              (el) =>
                PossibleTabs.includes(el) && (
                  <Slide responsive=" xs:basis-2/6 md:basis-2/12">
                    <div className="px-1">
                      <Button key={el} el={el} />
                    </div>
                  </Slide>
                ),
            )}
          </Slider>
        </div>

        <div className={` relative   min-h-[500px]  py-10`}>
          {isHome && <ChannelHome homeData={channel} />}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ChannelDetails;
