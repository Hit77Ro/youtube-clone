import { useParams } from "react-router-dom"
import Videos from "../Video/Videos"
import { useEffect, useState } from "react";
import { fetcher } from "../../utils";
import { layout } from "../../style";

const Explore = () => {
  const { category } = useParams();
  const [result, setResult] = useState(); 

   useEffect(() => {
     const endpoint =
       category === "trending" ? "trending" : `search?query=${category}`;
     fetcher(endpoint).then((d) => {
       setResult(d.data);
     });
   }, [category]);
   
  console.log(result)
  return (
    <div className={`${layout.container}`}>
      <Videos  data={result}  />
    </div>
  )
}

export default Explore