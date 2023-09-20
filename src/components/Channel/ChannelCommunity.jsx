import { useEffect } from "react";
import { useStore } from "../../Context/Context";
import Loader from "../../utils/Loader";
import useChannelFetcher from "../../utils/useChannelFetcher";
import { Post } from "../Post";
import EmptyMessage from "../Reusable/EmptyMessage";

const ChannelCommnunity = () => {
  const { dispatch, communityData, setChannelCommunity } = useStore();
  const { data } = useChannelFetcher("community");
  useEffect(() => {
    dispatch({ type: setChannelCommunity, payload: data });
  }, []);
  if (!communityData?.data) return <Loader />;
  console.log(communityData);
  return (
    <>
      {!communityData?.data.length ? (
        <EmptyMessage message="This channel hasn't posted yet" />
      ) : (
        <div className="flex flex-col gap-5">
          {communityData?.data.map((post) => (
            <Post item={post} key={crypto.randomUUID()} />
          ))}
        </div>
      )}
    </>
  );
};

export default ChannelCommnunity;
