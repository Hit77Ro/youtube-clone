import { useRef, useState } from "react";
import Slider, { Slide } from "../../utils/Slider";
import ChannelVideoCard from "./ChannelVideoCard";

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
  console.log(data);
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
          className={`  mt-3 grid   overflow-hidden  transition-all   ${
            isOpen ? "grid-rows-1" : "grid-rows-[minmax(0,100px)]"
          }`}
        >
          <div className="overflow-hidden transition-all  ">
            <div className="flex flex-col gap-2" ref={parent}>
              {data.data.map((el) => (
                <ChannelVideoCard key={crypto.randomUUID()} item={el} />
              ))}
            </div>
          </div>
        </div>
        <button
          onClick={() => setIsOpen((pre) => !pre)}
          className={`mt-5 w-full  cursor-pointer rounded-md bg-slate-100 p-3 text-center hover:bg-slate-200  `}
        >
          {isOpen ? "show less" : "show more"}
        </button>
      </div>
    </div>
  );
};

export default VideoListing;
