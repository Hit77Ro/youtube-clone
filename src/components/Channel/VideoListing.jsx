import styles from "../../style";
import Slider, { Slide } from "../../utils/Slider";
import ChannelVideoCard from "./ChannelVideoCard";

 const  settings = {
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }
 const VideoListing = ({ data }) => (
   <div className="flex-1">
     <h3 className="mb-6 text-lg  font-bold"> {data.title} </h3>

     <Slider styling="py-4" settings={settings}>
       {data.data.map((el) => (
         <Slide styling="xs:p-2" >
             
           
         <ChannelVideoCard key={crypto.randomUUID()} item={el} />
           </Slide>
       ))}
     </Slider>
   </div>
 );


export default VideoListing;
