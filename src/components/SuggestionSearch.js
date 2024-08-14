import React, { useEffect, useState } from "react";
import { apiKeyCoder2 } from "../utils/constants";
import ResVideoCard from "./ResVideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const SuggestionSearch = () => {
  const [suggestionVideos, setSuggestionVideos] = useState([]);

  const searchQuery = localStorage.getItem("suggestionPick");

  const youtube_api =
    "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=";

  useEffect(() => {
    getSuggestionSearch();
  }, [searchQuery]);

  const getSuggestionSearch = async () => {
    const data = await fetch(
      youtube_api + searchQuery + "&type=video&key=" + apiKeyCoder2
    );
    const json = await data.json();
    setSuggestionVideos(json.items);
  };

  if (!suggestionVideos) return <Shimmer />;

  return suggestionVideos.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap m-2">
      {suggestionVideos.map((sug) => (
        <Link key={sug.id.videoId} to={"/watch?v=" + sug.id.videoId}>
          <ResVideoCard info={sug} />
        </Link>
      ))}
    </div>
  );
};

export default SuggestionSearch;
