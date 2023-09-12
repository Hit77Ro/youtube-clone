import { useEffect, useRef, useState } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const buttonStyles = ` z-[1] shadow-md    top-2/4 -translate-y-2/4 absolute rounded-full min-w-[35px] min-h-[35px]  flex items-center  justify-center`;

const sliderStyles = ` scroll-smooth  overflow-scroll flex snap-x snap-mandatory`;

const Slider = ({
  children,
  styling,
  buttonStyling = "bg-white hover:bg-slate-100",
}) => {
  const slides = useRef();
  const [isPrev, setIsPrev] = useState(false);
  const [isNext, setIsNext] = useState(true);
  const [slideBy, setSlideBy] = useState(0); // Initialize to 0

  const Next = () => {
    if (isNext) {
      slides.current.scrollLeft += slideBy;
    }
  };

  const Prev = () => {
    if (isPrev) {
      slides.current.scrollLeft -= slideBy;
    }
  };

  const SlideLimit = () => {
    const scrollLeft = slides.current?.scrollLeft;
    const maxScrollLeft =
      slides.current?.scrollWidth - slides.current?.clientWidth;
    setSlideBy(Math.round(slides.current?.offsetWidth));

    if (scrollLeft <= 1) {
      setIsPrev((p) => false);
    } else {
      setIsPrev((p) => true);
    }
    if (scrollLeft + 1 >= maxScrollLeft) {
      setIsNext((p) => false);
    } else {
      setIsNext((p) => true);
    }
  };
  useEffect(() => {
      SlideLimit();
    slides.current?.addEventListener("scroll", SlideLimit);
    window.addEventListener("resize", SlideLimit);
    return () => {
      slides.current?.removeEventListener("scroll", SlideLimit);
      window.removeEventListener("resize", SlideLimit);
    };
  }, [slideBy]);

  return (
    <div className={` relative w-full`}>
      <button
        onClick={Prev}
        className={`-translate-x-2/4  ${buttonStyling} ${buttonStyles} ${
          !isPrev ? "hidden" : ""
        }`}
      >
        <AiOutlineArrowLeft />
      </button>
      <button
        onClick={Next}
        className={`right-0 translate-x-2/4 ${buttonStyling} ${buttonStyles} ${
          !isNext ? "hidden" : ""
        } `}
      >
        <AiOutlineArrowRight />
      </button>
      <div
        ref={slides}
        style={{ scrollbarWidth: 0 }}
        className={`${sliderStyles} ${styling}`}
      >
        {children}
      </div>
    </div>
  );
};

export const Slide = ({
  children,
  styling = "",
  responsive = "xs:basis-2/4 sm:basis-2/6  md:basis-3/12 xl:basis-2/12",
}) => {
  return (
    <div
      className={` max-w-full flex-none basis-full snap-start  ${responsive}  ${styling}`}
    >
      {children}
    </div>
  );
};

export default Slider;
