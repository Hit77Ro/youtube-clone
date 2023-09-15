import React, { useEffect, useRef, useState } from "react";
import Slider, { Slide } from "../../utils/Slider";
import ChannelVideoCard from "./ChannelVideoCard";
import { HiChevronDown } from "react-icons/hi2";

const VideoListing = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const parent = useRef();
  const [childHeight, setChildHeight] = useState(0);
  const [parentHeight, setParentHeight] = useState(0);

  useEffect(() => {
    if (parent.current) {
      setChildHeight(parent.current.children[0].offsetHeight);
      setParentHeight(
        isOpen
          ? parent.current?.offsetHeight
          : childHeight * Math.round(parent.current?.children.length / 2),
      );
    }
    console.log(childHeight);
  }, [isOpen, childHeight]);

  return (
    <div className={`flex-1`}>
      <h3 className="my-5 text-lg font-bold">{data.title}</h3>
      <div className="hidden xs:block">
        <Slider styling="py-2">
          {data.data.map((el) => (
            <Slide styling="xs:p-1 xs:mx-0 mx-1">
              <ChannelVideoCard key={crypto.randomUUID()} item={el} />
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
          <div ref={parent} className="flex justify-stretch flex-col  ">
            {data.data.map((el) => (
              <div className="overflow-hidden pt-3">
                <ChannelVideoCard key={crypto.randomUUID()} item={el} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={() => setIsOpen(true)} // Toggle the isOpen state
        className={`mt-5 w-full cursor-pointer justify-center rounded-md p-3 text-center text-2xl xs:hidden ${
          isOpen ? "hidden" : "flex"
        }`}
      >
        <HiChevronDown />
      </button>
    </div>
  );
};

export default VideoListing;
