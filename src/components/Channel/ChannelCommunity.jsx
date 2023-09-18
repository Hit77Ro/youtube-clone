import Loader from "../../utils/Loader";
import useChannelFetcher from "../../utils/useChannelFetcher";
import { Post } from "../Post";
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
          {data.map((post) => (
            <Post item={post} key={crypto.randomUUID()} />
          ))}
        </div>
      )}
    </>
  );
};

export default ChannelCommnunity;
