import Loader from "../../utils/Loader";
import useChannelFetcher from "../../utils/useChannelFetcher";
import { PostImg, PostVideo } from "../Post";
import EmptyMessage from "../Reusable/EmptyMessage";

const ChannelCommnunity = () => {
  const { data: obj } = useChannelFetcher("community");
  if (!obj) return <Loader />;

  const { data } = obj;
  return (
    <>
      {!obj.data.length ? (
        <EmptyMessage message="This channel hasn't posted yet" />
      ) : (
        <div className="flex flex-col gap-5">
          {data.map((post) =>
            post.attachment.type === "image" ? (
              <PostImg key={crypto.randomUUID()} item={post} />
            ) : post.attachment.type === "video" ? (
              <PostVideo key={crypto.randomUUID()} item={post} />
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
