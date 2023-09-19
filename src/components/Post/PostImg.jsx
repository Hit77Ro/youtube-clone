import getImg from "../../utils/getImg";

const PostImg = ({ item }) => {
  console.log(item);
  const { image } = item.attachment;

  return (
    <div className="mt-5 max-h-[800px]  mx-auto max-w-[700px] overflow-hidden rounded-xl">
      <img src={getImg(image, 6)} alt="post image" />
    </div>
  );
};

export default PostImg;
