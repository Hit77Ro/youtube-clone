import { useParams } from "react-router-dom";
import Videos from "../Video/Videos";
import { useEffect, useState } from "react";
import { FetchApi } from "../../utils/api";
import { useStore } from "../../Context/Context";
import styles from "../../style";

const SearchDetails = () => {
  const [medias, setMedias] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    // Use a function to update the search mode when the component mounts

    FetchApi(`search?query=${searchTerm}`).then((res) => {
      if (!res.data) return;
      const channels = res.data.filter((el) => el.type === "channel");
      const videos = res.data.filter((el) => el.type === "video");
      setMedias([...channels, ...videos]);
    });
  }, [ searchTerm])

  return (
    <div
      className={`container mx-auto  max-w-[1200px] ${styles.marginY} ${styles.paddingX}`}
    >
      <Videos isSearchMode={true} medias={medias} />
    </div>
  );
};

export default SearchDetails;
