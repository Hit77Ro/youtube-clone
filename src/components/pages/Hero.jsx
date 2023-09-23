import { useStore } from "../../Context/Context";
import Loader from "../../utils/Loader";
import Videos from "../Video/Videos";

const Hero = () => {
  const { heroData } = useStore();
  if(!heroData) return <Loader/>
  return (
    <div>
      <Videos data={heroData.data}  />
    </div>
  )
}

export default Hero