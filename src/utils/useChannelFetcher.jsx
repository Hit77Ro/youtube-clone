import { useEffect, useState } from "react";
import { FetchApi } from "./api";
import { useParams } from "react-router-dom";

const useChannelFetcher = (tab) => {
  const [data, setData] = useState();
  const { id } = useParams();
  useEffect(() => {
    FetchApi(`channel/${tab}?id=${id}`).then((d) => setData(d));
  }, [id]);

  return { data, id };
};

export default useChannelFetcher;
