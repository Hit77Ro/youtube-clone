import { BsYoutube } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useStore } from "../Context/Context";
const Logo = ({ barRef }) => {
  const { dispatch, isSidebarOpen, ToggleSidebar } = useStore();
  const handleClick = () => {
    dispatch({ type: ToggleSidebar, payload: !isSidebarOpen });
  };
  return (
    <div className={`flex  gap-4   `}>
      <button ref={barRef} className={` y-btn `} onClick={handleClick}>
        <FaBars />
      </button>
      <Link to="/" className={`flex items-center  gap-2 text-[20px]`}>
        <BsYoutube style={{ color: "red", fontSize: 20 }} />
        <h1 className="text-2xl font-bold text-slate-700  sm:text-2xl">
          Youtube
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
