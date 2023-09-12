import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchApi } from "../utils/api";
import Videos from "./Videos";
import styles from "../style";

const Explore = () => {
  const { category } = useParams();
  const [medias, setMedias] = useState([]);
  useEffect(() => {
    const endpoint = category === "trending" ? "trending" : `search?query=${category}`
    FetchApi(endpoint).then((d) => {
      setMedias(d.data);
    });
  }, [category]);
  return (
    <div className={`py-10 ${styles.paddingX}`}>
      <h1 className="mb-10  text-[30px] font-extrabold capitalize sm:text-[40px]">
        {" "}
        explore
        <span className=" text-red-500"> {category}</span> videos{" "}
      </h1>
      <Videos medias={medias} />
    </div>
  );
};

export default Explore;
