import styles from "../../style";
import Loader from "../../utils/Loader";
import { VideoCard } from "../Reusable";

const Videos = ({ data }) => {
  const videos = data;  
  if(!data) return <Loader/>

  return <div className={`${styles.grid}`}>
    {
      videos.map(el => (
        <VideoCard item={el} /> 
      ))
    }

  </div>;
};

export default Videos;
