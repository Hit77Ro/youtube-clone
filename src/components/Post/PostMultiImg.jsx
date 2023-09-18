import Slider, { Slide } from "../../utils/Slider";
import getImg from "../../utils/getImg";

const PostMultiImg = ({ item }) => {
  console.log(item);
  const { image: imgs } = item.attachment;
  // console.log(image);
  return (
    <div className="overflow-hidden rounded-2xl">
      <Slider containerStyles=" max-w-[800px]  mx-auto">
        {imgs.map((el) => (
          <Slide
            responsive=" basis-full max-h-[700px]"
            key={crypto.randomUUID()}
          >
            <img
              className="object-contain"
              src={
                getImg(el,7)
              }
              alt=""
            />
          </Slide>
        ))}
      </Slider>
    </div>
  );
};

export default PostMultiImg;
