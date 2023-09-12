import { AiFillHome } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy } from "react-icons/gi";
import {
  RiJavascriptFill,
  RiLightbulbLine,
  RiReactjsFill,
} from "react-icons/ri";
import { FaConnectdevelop } from "react-icons/fa";
import { BsCodeSquare } from "react-icons/bs";

export const categories = [
  { name: "home", icon: <AiFillHome /> },
  { name: "Trending", icon: <MdLocalFireDepartment /> },
  { name: "Learning", icon: <RiLightbulbLine /> },
  { name: "Coding", icon: <FaConnectdevelop /> },
  { name: "Coding phase", icon: <BsCodeSquare /> },
  { name: "Javascript", icon: <RiJavascriptFill /> },
  { name: "ReactJs", icon: <RiReactjsFill /> },
  { name: "Music", icon: <CgMusicNote /> },
  { name: "Films", icon: <FiFilm /> },
  { name: "Live", icon: <MdLiveTv /> },
  { name: "Gaming", icon: <IoGameControllerSharp /> },
  { name: "News", icon: <ImNewspaper /> },
  { name: "Sports", icon: <GiDiamondTrophy /> },
];

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];