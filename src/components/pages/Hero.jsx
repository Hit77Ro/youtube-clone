import { useStore } from "../../Context/Context";
import { layout } from "../../style";
import Loader from "../../utils/Loader";
import Videos from "../Video/Videos";

const Hero = () => {
  const { heroData } = useStore();
  if(!heroData) return <Loader/>
  return (
    <div className={`${layout.container}`}>
      <Videos data={heroData.data}  />
    </div>
  )
}

export default Hero