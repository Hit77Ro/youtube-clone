import { BsArrowLeft, BsSearch, BsX, BsYoutube } from "react-icons/bs";
import Logo from "./Logo";
import styles from "../style";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../Context/Context";

const Navbar = () => {
  const { SetLoader, dispatch, isSearchMode } = useStore();

  const navigate = useNavigate();
  const [inputToggler, setInputToggler] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const input = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: SetLoader, payload: true });
    if (searchTerm) navigate(`search/${searchTerm}`);
  };

  useEffect(() => {
    input.current.focus();
    const onResize = () => {
      if (window.innerWidth >= 640) setInputToggler(false);
    };
    if (inputToggler) {
      window.addEventListener("resize", onResize);
    }
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [inputToggler]);
  return (
    <nav
      className={` fixed inset-0 z-10 bg-white ${styles.centerX}  h-[70px] w-full   justify-between ${styles.paddingX}`}
    >
      {!inputToggler && <Logo />}
      <div className={`${styles.centerX}  flex-1  justify-center`}>
        <div
          className={`  basis-full  items-center sm:flex sm:basis-[80%] lg:basis-2/4 ${
            inputToggler ? "flex" : "hidden"
          }`}
        >
          {inputToggler && (
            <button
              className={`y-btn mr-4 `}
              onClick={() => setInputToggler(false)}
            >
              <BsArrowLeft />
            </button>
          )}

          <form
            className="relative flex  h-10 flex-1 justify-end overflow-hidden rounded-full  border border-slate-300 "
            onSubmit={handleSubmit}
          >
            <div className="relative flex-1">
              <span
                className={`pointer-events-none absolute  left-0 z-10 h-full pl-3 text-slate-500  ${styles.flexCenter}`}
              >
                <BsSearch />
              </span>
              <input
                minLength={5}
                required
                value={searchTerm}
                ref={input}
                onChange={(e) => setSearchTerm(e.target.value)}
                type="search"
                placeholder="Search.."
                className=" search-input  absolute left-0 h-full w-full flex-1 border border-slate-300 pl-10 pr-11 outline-none placeholder:text-slate-500 focus:border-slate-500"
              />
              {searchTerm && (
                <span
                  role="button"
                  onClick={() => {
                    setSearchTerm("");
                    input.current.focus();
                  }}
                  className={` absolute  right-0  top-2/4 -translate-y-2/4 px-3 text-[30px] text-slate-400`}
                >
                  <BsX />
                </span>
              )}
            </div>
            <button className={`relative bg-gray px-7 ${styles.flexCenter}`}>
              <BsSearch />
            </button>
          </form>
        </div>
      </div>
      {!inputToggler && (
        <button
          className={`y-btn sm:hidden `}
          onClick={() => {
            setInputToggler(true);
          }}
        >
          <BsSearch />
        </button>
      )}
      {/* {!inputToggler && (
        <button
          className={`h-11 w-11 rounded-full bg-slate-50 text-[20px] text-red-500 hover:bg-slate-100 ${styles.flexCenter}`}
        >
          <BsYoutube />
        </button>
      )} */}
    </nav>
  );
};

export default Navbar;
