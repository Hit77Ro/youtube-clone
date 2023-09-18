import ChannelVideoCard from "../Reusable/ChannelVideoCard";

const PostVideo = ({ item }) => {
  return (
    <ChannelVideoCard
      extra={{ description :item?.attachment?.description }}
      item={item.attachment}
      direction="xs:grid-cols-[220px,1fr]"
    />
  );
};

export default PostVideo;
