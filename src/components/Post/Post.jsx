import { Link } from "react-router-dom";
import { PostImg, PostMultiImg, PostText, PostVideo } from "./";
import PostTitle from "./PostTitle";
import { BiMessageAltDetail } from "react-icons/bi";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
const Post = ({ item }) => {
  const {
    authorText,
    authorChannelId,
    authorThumbnail: [{ url: url1 }, { url: url2 }, { url: url3 }],
    contentText,
    publishedTimeText,
    voteCountText,
    replyCount,
  } = item;
  return (
    <div className="grid grid-cols-[auto,1fr] items-start gap-2 rounded-2xl border border-slate-300  p-3 sm:p-5">
      <Link to={`/channel/${authorChannelId}`}>
        <img
          className="max-w-[30px] rounded-full md:max-w-[50px]"
          src={url3 || url2 || url1}
          alt="author avatar"
        />{" "}
      </Link>
      <div>
        <h5 className="flex items-center gap-2 text-sm">
          {" "}
          <Link to={`/channel/${authorChannelId}`}>{authorText}</Link>
          <span className="text-xs"> {publishedTimeText}</span>{" "}
        </h5>
        <PostTitle title={contentText} />

        {item?.attachment?.type === "image" ? (
          <PostImg key={crypto.randomUUID()} item={item} />
        ) : item?.attachment?.type === "video" ? (
          <PostVideo key={crypto.randomUUID()} item={item} />
        ) : item?.attachment?.type === "multi_image" ? (
          <PostMultiImg item={item} key={crypto.randomUUID()} />
        ) : (
          <PostText item={item} key={crypto.randomUUID()} />
        )}
        <div className=" text-md mt-2  flex items-center gap-4">
          <span title="" className="flex  items-center gap-1">
            <AiOutlineLike /> {voteCountText}
          </span>
          <span title="" className="flex  items-center gap-1">
            <AiOutlineDislike />
          </span>
          <span title="" className="flex  items-center gap-1">
            <BiMessageAltDetail /> {replyCount}{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
