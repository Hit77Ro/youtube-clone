import { ImWondering } from "react-icons/im";
import styles from "../../style";

const EmptyMessage = ({ message }) => {
  return (
    <h1 className={`flex-1 flex-col gap-5 ${styles.flexCenter} `}>
      {" "}
      <span>{message}</span>{" "}
      <span className="text-[40px] text-red-300">
        {" "}
        <ImWondering />{" "}
      </span>
    </h1>
  );
};

export default EmptyMessage;
