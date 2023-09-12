import Videos from "./Videos";
import { useStore } from "../Context/Context";
import { useEffect } from "react";
const Home = () => {
  const { medias, ToggleSearchMode, dispatch } = useStore();
  useEffect(() => {
    dispatch({ type: ToggleSearchMode, payload: false });
  }, []);
  return (
    <>
      <Videos medias={medias} />;
    </>
  );
};

export default Home;
