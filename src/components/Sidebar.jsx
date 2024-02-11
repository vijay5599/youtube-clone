import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import React from "react";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import AccountBox from "@mui/icons-material/AccountBox";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const main = [
  {
    title: "Home",
    icon: <HomeIcon />,
    path: "/",
  },
  {
    title: "Shorts",
    icon: <SubscriptionsIcon />,
  },
  {
    title: "YouTube Music",
    icon: <LibraryMusicIcon />,
  },
];

const subMain = [
  {
    title: "Your Channel",
    icon: <AccountBoxIcon />,
  },
  {
    title: "History",
    icon: <HistoryOutlinedIcon />,
  },
  {
    title: "Your videos",
    icon: <PlayCircleIcon />,
  },
  {
    title: "Your movies",
    icon: <MovieCreationOutlinedIcon />,
  },
  {
    title: "Watch later",
    icon: <AvTimerIcon />,
  },
];
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  //Early return
  if (!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg col-span-2 h-full">
      <div>
        <ul>
          {main.map((item) => (
            <li key={item.title}>
              <Link to={item.path} className="flex py-2 items-center">
                {item.icon}
                <p className="ml-2">{item.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <hr></hr>

      <div className="mt-3">
        <h1 className="text-xl font-semibold items-center">
          You <ArrowForwardIosIcon style={{ height: "18px" }} />
        </h1>
        <ul>
          {subMain.map((item) => (
            <li key={item.title} className="flex py-2">
              {item.icon}
              <p className="ml-2">{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
      <hr></hr>
    </div>
  );
};

export default Sidebar;
