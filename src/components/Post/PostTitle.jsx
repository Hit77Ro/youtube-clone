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
  }, [height, scrollHeight]);

  useEffect(() => {
    window.addEventListener("resize", _);
  }, []);
  return (
    <div className="p-1">
      <div
        ref={collapse}
        className={`my-1 overflow-hidden   text-ellipsis  transition-all `}
        style={{ maxHeight: isOpen ? scrollHeight : 40 }}
      >
        <h3 className={` text-justify text-sm text-slate-900 transition-all  `}>
          {title.split(".").join(".\n")}
        </h3>
      </div>
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
