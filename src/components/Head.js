import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { cacheResults } from "../utils/searchSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  //here we get the datas from store[search]
  const searchCache = useSelector((store) => store.search);

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const getSearchSuggestions = async () => {
    //Youtube API call for getting suggestions
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    //if my searchQuery is not present in searchCache-then dispatch an action to update it
    dispatch(
      cacheResults({
        //here we updating the store with suggestions by the name of searchQuery
        [searchQuery]: json[1],
      })
    );
  };

  /*
  searchCache = {
  "iphone" : ["iphone 11", "iphone 14"]
  }

(again my search input is iphone)searchQuery = iphone
*/

  useEffect(() => {
    //setTimeout - if d/b two keypress is < 200ms it will not call API and vice-versa
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const handleSearchButton = () => {
    localStorage.setItem("searchQuery", searchQuery);
  };

  const handleSuggestionList = (s) => {
    localStorage.setItem("suggestionPick", s);
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img
          onClick={handleToggleMenu}
          className="h-7 mt-1 cursor-pointer"
          alt="menu-icon"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAAARVBMVEX///8AAAD19fXo6OhDQ0Pv7+9JSUkbGxu8vLzJycmMjIz4+PjBwcGCgoJRUVFzc3MmJiaZmZkgICBeXl56enplZWVWVlaT91pBAAABgElEQVR4nO3b246CMBhFYebASSkqHt7/UWeYCdaLtmK82JtkfU+wEkMtP21VAQAAAAAAAOvtP2X2z+vqITStTBOGutzXNx9iTV/qC+q8Wcj37dRt/3a5vk5dtugyz8eoDluM6SelV3dF6QfloM6KDsnAozorOiYD1VWPthk4qauiKRl4UWdF6T8Tm3U6t1LXN3XX4pbZ0gzqsMWQ7vPfLFTVSd02O+X7fv+P5WvNVNywzonX8VtmvD7L+1PLrKkDAAAA8J76S2bNnr8L50bmHDLj6bu+Vb92tsX3OovRQmGwYNG35e8k7uM3m+lbbv5mNAK+JAP5TvKCbQba/8T2D4n9MmO/UNv/1flvFkwKC33+G9bKfss/M39pAgAAAPAm76NR5ofL3I/nuR9wtBgsFEYLNvO3zCFbn/skmfGbzfQtN38zGgGnj8rLV5gofdlAXfVom4H230nsL13ZX1vzWagzF/98VuoNfydxv77rfwHa/wr5zPsSPgAAAAAAAHD3AycCPgunKl+TAAAAAElFTkSuQmCC"
        />

        <a href="/">
          <img
            className="h-10 mx-2"
            alt="youtube-logo"
            src="https://t4.ftcdn.net/jpg/04/76/41/47/240_F_476414785_Qsbkvlr4AK0lvuKjSDlb7lfOY5oqwimn.jpg"
          />
        </a>
      </div>
      <div className="col-span-10 text-center">
        <div>
          <input
            className="w-1/2 px-3 border border-slate-600 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(true)}
          />

          <a href={"/search"}>
            <button
              className="border border-slate-600 px-6 rounded-r-full bg-gray-200"
              onClick={() => handleSearchButton()}
            >
              🔍
            </button>
          </a>

          {showSuggestions && (
            <div className=" border-gray-100 shadow-lg rounded-lg absolute ml-[230px] w-[35rem] bg-white py-2 px-5 text-left">
              <ul>
                {suggestions.map((s, index) => (
                  <a href="/suggestionSearch">
                    <li
                      onClick={() => handleSuggestionList(s, index)}
                      key={index}
                      className="py-1 shadow-sm hover:bg-gray-100 cursor-pointer"
                    >
                      {s}
                    </li>
                  </a>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user-icon"
          src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
        />
      </div>
    </div>
  );
};

export default Head;
