import React, { useEffect, useRef, useState } from "react";
import Slider, { Slide } from "../../utils/Slider";
import ChannelVideoCard from "./ChannelVideoCard";
import { HiChevronDown } from "react-icons/hi2";

const VideoListing = ({ data }) => {
  const [childHeight, setChildHeight] = useState(0);
  const [parentHeight, setParentHeight] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const parent = useRef();

  useEffect(() => {
    const _ = () => {
      if (parent.current) {
        setChildHeight(parent.current.children[0].offsetHeight);
        setParentHeight(
          isOpen
            ? parent.current?.offsetHeight
            : childHeight * Math.round(parent.current?.children.length / 2),
        );
      }
    };
    _();
    window.addEventListener("resize", _);
    return () => window.removeEventListener("resize", _);
  }, [isOpen, childHeight, window.innerWidth]);

  return (
    <div className={`flex-1`}>
      <h3 className="my-2 text-lg font-semibold text-slate-800">
        {data.title}
      </h3>
      <div className="hidden xs:block">
        <Slider sliderStyles="py-2">
          {data.data.map((el) => (
            <Slide key={crypto.randomUUID()} styling="xs:p-1 xs:mx-0 mx-1">
              <ChannelVideoCard  item={el} />
            </Slide>
          ))}
        </Slider>
      </div>
      <div className=" xs:hidden">
        <div
          className="overflow-hidden transition-all"
          style={{
            height: parentHeight + "px",
          }}
        >
          <div ref={parent} className="grid">
            {data.data.map((el) => (
              <div key={crypto.randomUUID()} className="overflow-hidden pt-3">
                <ChannelVideoCard direction="grid-cols-2" key={crypto.randomUUID()} item={el} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={() => setIsOpen(true)} // Toggle the isOpen state
        className={`mt-2 w-full cursor-pointer justify-center rounded-md p-3 text-center text-2xl text-slate-700 xs:hidden ${
          isOpen ? "hidden" : "flex"
        }`}
      >
        <HiChevronDown />
      </button>
    </div>
  );
};

export default VideoListing;
