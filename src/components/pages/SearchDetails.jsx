import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetcher } from "../../utils";
import Videos from "../Video/Videos";

const SearchDetails = () => {
  const { searchTerm } = useParams();
  const  [result, setResult] = useState();

  useEffect(() => {
    fetcher(`search?query=${searchTerm}`).then((res) => { 
      if (!res.data) return;
      const channels = res?.data.filter((el) => el.type === "channel");
      const videos = res?.data.filter((el) => el.type === "video");
      setResult([...channels, ...videos]);
    });
  }, [searchTerm]);
  return (
    <div>
      <Videos data={result} direction="column" />
    </div>
  );
};

export default SearchDetails;
