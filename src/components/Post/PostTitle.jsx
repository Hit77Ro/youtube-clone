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
      <div className={`my-1 grid  transition-all `}>
        <h3
          ref={collapse}
          className={`overflow-hidden text-ellipsis text-justify text-sm text-slate-900 transition-all ${
            isOpen ? "max-h-auto" : "max-h-[80px]"
          } `}
        >
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
