import { useParams } from "react-router-dom";
import Videos from "./Videos";
import { useEffect, useState } from "react";
import { FetchApi } from "../utils/api";
import { useStore } from "../Context/Context";
import styles from "../style";

const SearchDetails = () => {
  const [medias, setMedias] = useState([]);
  const { dispatch, ToggleSearchMode } = useStore();
  const { searchTerm } = useParams();
  useEffect(() => {
    dispatch({ type: ToggleSearchMode, payload: true });
    FetchApi(`search?query=${searchTerm}`).then((res) => {
      if (!res.data) return;
      const channels = res.data.filter((el) => el.type === "channel");
      const videos = res.data.filter((el) => el.type === "video");
      setMedias([...channels, ...videos]);
    });
  }, [searchTerm]);

  return (
    <div className={` ${styles.marginY} ${styles.paddingX}`}>
      <Videos medias={medias} />
    </div>
  );
};

export default SearchDetails;
