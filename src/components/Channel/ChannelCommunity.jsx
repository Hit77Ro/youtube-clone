import Loader from "../../utils/Loader";
import useChannelFetcher from "../../utils/useChannelFetcher";
import EmptyMessage from "../EmptyMessage";

const ChannelCommnunity = () => {
  const { data: obj } = useChannelFetcher("community");
  if (!obj) return <Loader />;

  console.log(obj);
  return (
    <>
      {!obj.data.length ? (
        <EmptyMessage message="This channel hasn't posted yet" />
      ) : (
        <div>ChannelCommnunity</div>
      )}
    </>
  );
};

export default ChannelCommnunity;
