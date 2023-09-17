import { useParams } from "react-router-dom";

const VideoDetails = () => {
  const { id } = useParams();

  // if (!id) return <Loader />;
  return <div>VideoDetails</div>;
};

export default VideoDetails;
