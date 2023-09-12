import styles from "../../style";
import Slider, { Slide } from "../../utils/Slider";
import ChannelVideoCard from "./ChannelVideoCard";

 const VideoListing = ({ data }) => (
   <div className="flex-1">
     <h3 className="mb-6 text-lg  font-bold"> {data.title} </h3>

     <Slider styling="py-4">
       {data.data.map((el) => (
         <Slide styling="p-2" >
             
           
         <ChannelVideoCard key={crypto.randomUUID()} item={el} />
           </Slide>
       ))}
     </Slider>
   </div>
 );


export default VideoListing;
