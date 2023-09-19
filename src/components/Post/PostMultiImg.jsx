import Slider, { Slide } from "../../utils/Slider";
import getImg from "../../utils/getImg";

const PostMultiImg = ({ item }) => {
  console.log(item);
  const { image: imgs } = item.attachment;
  // console.log(image);
  return (
    <div>
      <Slider
        containerStyles=" max-w-[700px] mx-auto "
        sliderStyles="overflow-hidden rounded-xl"
      >
        {imgs.map((el, idx) => (
          <Slide
            styling="relative"
            responsive="basis-full max-h-[700px]"
            key={crypto.randomUUID()}
          >
            <span className="absolute right-2 top-3 rounded-md bg-black px-2 text-sm text-slate-300">
              {" "}
              {idx + 1}/{imgs.length}{" "}
            </span>
            <img className="object-fill" src={getImg(el, 7)} alt="" />
          </Slide>
        ))}
      </Slider>
    </div>
  );
};

export default PostMultiImg;
