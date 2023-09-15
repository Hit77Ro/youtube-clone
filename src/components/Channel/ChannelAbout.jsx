import useChannelFetcher from "../../utils/useChannelFetcher";
import Loader from "../../utils/Loader";
import { months } from "../../utils/constants";
import styles from "../../style";

const JoinedDate = (date) => {
  const M = new Date(date).getMonth();
  const D = new Date(date).getDate();
  const Y = new Date(date).getFullYear();
  return `joined ${months[M]} ${D} , ${Y}`;
};
const ChannelAbout = () => {
  // const  {id}= useParams()
  // useEffect(() => {
  //   FetchApi(`channel/about?id=${id}`).then((d) => console.log(d));
  // }, [id]);
  const { data, id } = useChannelFetcher("about");
  if (!data) return <Loader styling="absolute h-full w-full" />;

  const { joinedDate, country, description, viewCount } = data;
  const views = viewCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  console.log(views);
  const style = "border-b xs:py-3  border-b-slate-200";
  console.log(data);
  return (
    <div className="grid gap-x-[10%] gap-y-3 sm:grid-cols-2" id="About">
      {description || country ? (
        <div className="flex flex-col gap-6 border-b border-b-slate-200 py-4 text-xs  text-slate-700 sm:text-sm">
          {description && (
            <div className="flex flex-col gap-6 ">
              <h3> Description : </h3>
              <p className="">{description}</p>
            </div>
          )}
          {country && (
            <div className="flex flex-col gap-6 ">
              <h3> Details </h3>
              <h4 className={`gap-4 text-sm text-slate-500 ${styles.centerX}`}>
                {" "}
                <span> Location : </span> <span> {country} </span>{" "}
              </h4>
            </div>
          )}
        </div>
      ) : (
        ""
      )}

      {/* stats */}
      <div className="flex flex-col gap-1 text-xs text-slate-600 sm:text-sm">
        <h3 className={`${style}`}>Stats</h3>
        <h3 className={`${style}`}> {JoinedDate(joinedDate)} </h3>
        <h3 className={`${style}`}> {views || 0} views</h3>
      </div>
    </div>
  );
};

export default ChannelAbout;
