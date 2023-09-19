import { useEffect, useRef, useState } from "react";
const PostTitle = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  const collapse = useRef();
  const _ = () => {
    setHeight(collapse.current?.offsetHeight);
    setScrollHeight(collapse.current?.scrollHeight);
  };
  useEffect(() => {

    _();
    console.log("height")
  }, [height, scrollHeight]);

  useEffect(() => {
    window.addEventListener("resize", _);
  }, []);
  return (
    <div className="p-1">
      <h3
        className={` overflow-hidden text-justify text-[15px] leading-[1.6] text-slate-900 transition-all  `}
        ref={collapse}
        style={{ maxHeight: isOpen ? scrollHeight : 1.6*15*5  + 'px' }}
      >
        {title.split(".").join(".\n")}
      </h3>
      {scrollHeight > height && (
        <span
          className=" mt-2 block cursor-pointer text-slate-600"
          onClick={() => setIsOpen((_) => !_)}
        >
          {" "}
          {isOpen ? "show less" : "show more"}{" "}
        </span>
      )}
    </div>
  );
};

export default PostTitle;
