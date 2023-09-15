import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchApi } from "../utils/api";
import Videos from "./Videos";
import { useStore } from "../Context/Context";
const Explore = () => {
  const { category } = useParams();
  const { ToggleSearchMode, dispatch } = useStore();
  const [medias, setMedias] = useState([]);
  useEffect(() => {
    const endpoint =
      category === "trending" ? "trending" : `search?query=${category}`;
    FetchApi(endpoint).then((d) => {
      setMedias(d.data);
    });
  }, [category]);
  useEffect(() => {
    dispatch({ type: ToggleSearchMode, payload: false });
  }, []);
  return (
    <div>
      <h1 className="mb-10  text-center text-[20px] font-medium capitalize text-slate-800 sm:text-[25px]">
        {" "}
        explore
        <span className=" text-red-500"> {category}</span> videos{" "}
      </h1>
      <Videos medias={medias} />
    </div>
  );
};

export default Explore;
