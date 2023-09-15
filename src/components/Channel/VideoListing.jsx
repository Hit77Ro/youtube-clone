import { useEffect, useRef, useState } from "react";
import Slider, { Slide } from "../../utils/Slider";
import ChannelVideoCard from "./ChannelVideoCard";
import { HiChevronDown } from "react-icons/hi2";
const settings = {
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1324,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};
const VideoListing = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const parent = useRef();
  const [childHeight, setChildHeight] = useState(0);
  const [parentHeight, setParentHeight] = useState(0);

  useEffect(() => {
    if (parent.current) {
      setChildHeight(parent.current.children[0].offsetHeight);
      setParentHeight(parent.current.offsetHeight);
    }
  }, []);
  return (
    <div className={`flex-1  `}>
      <h3 className="my-5 text-lg  font-bold"> {data.title} </h3>
      <div className="hidden xs:block">
        <Slider styling="py-2" settings={settings}>
          {data.data.map((el) => (
            <Slide styling="xs:p-1 xs:mx-0 mx-1">
              <ChannelVideoCard key={crypto.randomUUID()} item={el} />
            </Slide>
          ))}
        </Slider>
      </div>
      <div className="xs:hidden">
        <div
          className="overflow-hidden transition-all"
          style={{
            height: isOpen
              ? parentHeight
              : 120 * Math.floor(parent.current?.children.length / 2) + "px",
          }}
        >
          <div ref={parent} className="flex flex-col">
            {data.data.map((el) => (
              <div className="min-h-[120px] overflow-hidden py-2">
                <ChannelVideoCard key={crypto.randomUUID()} item={el} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={() => setIsOpen(true)}
        className={`mt-5 w-full   cursor-pointer justify-center rounded-md p-3  text-center text-2xl   ${
          isOpen ? "hidden" : "flex"
        } `}
      >
        <HiChevronDown />
      </button>
    </div>
  );
};

export default VideoListing;
