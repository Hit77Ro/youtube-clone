import Loader from "../../utils/Loader";
import useChannelFetcher from "../../utils/useChannelFetcher";
import { PostImg, PostMultiImg, PostText, PostVideo } from "../Post";
import EmptyMessage from "../Reusable/EmptyMessage";

const ChannelCommnunity = () => {
  const { data: obj } = useChannelFetcher("community");
  if (!obj) return <Loader />;

  const { data } = obj;
  console.log(data);
  return (
    <>
      {!obj.data.length ? (
        <EmptyMessage message="This channel hasn't posted yet" />
      ) : (
        <div className="flex flex-col gap-5">
          {data.map((post) =>
            post?.attachment?.type === "image" ? (
              <PostImg key={crypto.randomUUID()} item={post} />
            ) : post?.attachment?.type === "video" ? (
              <PostVideo key={crypto.randomUUID()} item={post} />
            ) : !post?.attachment ? (
              <PostText item={post} key={crypto.randomUUID()} />
            ) : post?.attachment?.type === "multi_image" ? (
              <PostMultiImg item={post} key={crypto.randomUUID()} />
            ) : (
              ""
            ),
          )}
        </div>
      )}
    </>
  );
};

export default ChannelCommnunity;
