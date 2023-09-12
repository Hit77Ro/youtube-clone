import { useEffect, useRef, useState } from "react";
import { useStore } from "../Context/Context";
import styles from "../style";
import { categories } from "../utils/constants";
import Logo from "./Logo";
import { FetchApi } from "../utils/api";
import { useNavigate } from "react-router-dom";
import useClickOutside from "../utils/useClickOutside";
import useFunctions from "../utils/useFunctions";

const Sidebar = () => {
  const [category, setCategory] = useState("home");
  const navigate = useNavigate();

  const { isSidebarOpen, SetMedia, dispatch, ToggleSidebar } = useStore();
  const barRef = useRef(null);

  const handleClick = (name) => {
    setCategory(name);
    navigate("/");
  };
  useClickOutside(isSidebarOpen, (event) => {
    if (!barRef.current.contains(event.target) && window.innerWidth <= 1024) {
      dispatch({ type: ToggleSidebar, payload: false });
    }
  });

  const dispatcher = (array) => {
    dispatch({ type: SetMedia, payload: array });
  };
  useEffect(() => {
    if (category === "home") {
      FetchApi(`home`).then((d) => {
        dispatcher(d.data);
      });
    } else {
      navigate(`/explore/${category}`);
    }
  }, [category]);
  return (
    <aside
      className={`fixed bottom-0 top-0 z-20 min-h-screen 
      overflow-auto bg-white shadow-lg transition-[width,0.3s,linear] lg:shadow-none ${
        styles.sidebarStyles
      } ${isSidebarOpen ? "left-0" : "-left-full"}`}
    >
      <div className="h-[70px]">
        <div
          className={`sidebarStyles fixed z-30 flex  h-[70px] items-center bg-white px-2 sm:px-5  ${styles.sidebarStyles}`}
        >
          <Logo barRef={barRef} />
        </div>
      </div>
      <div className="flex flex-col gap-3 px-5 py-3">
        {categories.map((cat) => (
          <button
            onClick={() => handleClick(cat.name)}
            key={cat.name}
            className={`gap-5 rounded-md px-2 py-3 font-semibold capitalize text-red-500 transition-all  hover:shadow-sm ${
              category === cat.name
                ? "scale-105 bg-red-500 text-white shadow-md "
                : "bg-slate-50 hover:bg-slate-200"
            } ${styles.centerX}`}
          >
            <span className="text-lg font-extrabold"> {cat.icon} </span>
            <span>{cat.name}</span>
          </button>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
