import Videos from "./Videos";
import { useStore } from "../Context/Context";
import { useEffect } from "react";
import styles from "../style";
const Home = () => {
  const { medias, ToggleSearchMode, dispatch } = useStore();
  useEffect(() => {
    dispatch({ type: ToggleSearchMode, payload: false });
  }, []);
  return (
    <>
      <div className={styles.paddingX}>
        <Videos medias={medias} />
      </div>
    </>
  );
};

export default Home;
