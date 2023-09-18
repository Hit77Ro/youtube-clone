import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { FetchApi } from "../../utils/api";
import styles, { layout } from "../../style";
import { BiChevronRight } from "react-icons/bi";
import Loader from "../../utils/Loader";
const PossibleTabs = [
  "Home",
  "Videos",
  "Playlists ",
  "Community",
  "Channels",
  "Live",
  "About",
];

import Slider, { Slide } from "../../utils/Slider";
import getImg from "../../utils/getImg";
const ChannelDetails = () => {
  const aboutButton = useRef();
  const [Tab, setTab] = useState("Home");
  const [channel, setChannel] = useState();
  const { id } = useParams();
  const HomeRef = useRef();

  useEffect(() => {
    HomeRef.current?.scrollIntoView();
  }, []);
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
      .catch((error) => console.error(error));
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
    const linkStyles = ` rounded-md border block px-10 py-1 text-[14px] sm:py-2 text-center text-slate-500  transition-[.5s] ${
      Tab === el
        ? " border-red-800 bg-red-600 text-white hover:bg-red-600"
        : "border-slate-300 hover:bg-slate-200"
    } `;
    return el !== "About" ? (
      <NavLink
        to={`/channel/${id}${el === "Home" ? "" : "/" + el.toLowerCase()}`}
        key={el}
        className={linkStyles}
        ref={el === "Home" ? HomeRef : null}
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
    <div className={`min-h-screen  `}>
      {meta.banner && (
        <div className="flex h-[18vw] w-full lg:h-[16wv]   ">
          <img
            className="h-full  flex-1 "
            src={
              getImg(meta?.banner,5)
            }
            alt="channel banner"
          />
        </div>
      )}
      <div className={` max-w-[1284px] mx-auto ${styles.paddingX}`}>
        <div className={`mt-5  flex  flex-col items-center sm:flex-row`}>
          <div
            className={` max-w-[80px] overflow-hidden rounded-full md:max-w-[100px]  ${styles.flexCenter}`}
          >
            <img src={getImg(meta?.avatar,2)} alt="" className="object-contain" />
          </div>
          <div
            className={` flex flex-col items-center gap-[6px] p-4 text-slate-600 md:max-w-[800px] md:items-start ${styles.paddingX}`}
          >
            <h2 className="text-sm text-slate-700 md:text-lg"> {title} </h2>
            <p
              className={`flex flex-wrap gap-1  text-center text-xs  ${styles.centerX}`}
            >
              <span> {channelHandle} </span>
              <span> {subscriberCountText} subscribers </span>
              <span> {videosCount || 0} videos </span>
            </p>
            {description && (
              <Link
                to={`/channel/${id}/about`}
                className={`  text-left text-xs sm:text-sm ${styles.centerX}`}
                onClick={(e) => aboutButton.current?.scrollIntoView()}
              >
                {description.split(" ", 20).join(" ") + "..."}
                <span className="text-2xl text-slate-500">
                  <BiChevronRight />
                </span>
              </Link>
            )}
          </div>
        </div>
        <div className=" my-5">
          <Slider>
            {tabs.map(
              (el) =>
                PossibleTabs.includes(el) && (
                  <Slide key={crypto.randomUUID()} responsive="">
                    <div className="px-1">
                      <Button key={el} el={el} />
                    </div>
                  </Slide>
                ),
            )}
          </Slider>
        </div>

        <div
          className={` relative   mx-auto  min-h-[500px] max-w-[1200px]  py-5`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ChannelDetails;
