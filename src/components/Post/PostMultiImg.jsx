import Slider, { Slide } from "../../utils/Slider";

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
                el[7]?.url ||
                el[6]?.url ||
                el[5]?.url ||
                el[4]?.url ||
                el[3]?.url ||
                el[2]?.url ||
                el[1]?.url
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
