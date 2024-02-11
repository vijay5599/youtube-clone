import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { GOOGLE_API_KEY, YOUTUBE_SEARCH_API } from "../utils/Constants";
const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      if (searchQuery.trim() !== " ") {
        getSearchSuggestions();
      } else {
        setSuggestions([]);
      }
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    try {
      const data = await fetch(
        `${YOUTUBE_SEARCH_API}?part=snippet&maxResults=5&q=${searchQuery}&key=${GOOGLE_API_KEY}`
      );
      if (!data.ok) {
        throw new Error("Failed to fetch search suggestions");
      }
      const json = await data.json();
      console.log(json);
      const items = json.items || [];
      const suggestions = items.map((item) => item.snippet.title);
      console.log("-->", suggestions);
      setSuggestions(suggestions);
      setShowSuggestions(true);
    } catch (error) {
      console.error("Error fetching search suggestions:", error);
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="relative grid grid-flow-col items-center p-2 m-2 shadow-md">
      <div className="flex col-span-1 items-center justify-between">
        <MenuIcon
          className="cursor-pointer"
          style={{ width: "32px", height: "32px" }}
          onClick={() => toggleMenuHandler()}
        />
        <img
          className="cursor-pointer"
          src="./YouTube.png"
          alt="YouTube"
          style={{ width: "130px", height: "50px" }}
        />
      </div>
      <div className="flex col-span-10 justify-center relative">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
          className="h-10 w-1/2 border border-gray-500 outline-none px-3 rounded-ss-full rounded-es-full"
        />
        <SearchIcon
          className="border p-1 border-gray-500 rounded-se-full rounded-ee-full bg-gray-200"
          style={{ height: "40px", width: "60px" }}
        />
        {showSuggestions && (
          <div className="mr-12 absolute bg-white py-2 px-2 w-1/2 shadow-lg rounded-lg border border-gray-200 top-full">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍 {s}{" "}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex col-span-1 justify-between">
        <VideoCallIcon />
        <NotificationsActiveIcon />
        <AccountCircleIcon />
      </div>
    </div>
  );
};
export default Header;
