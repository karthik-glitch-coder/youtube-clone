import React, { useEffect, useState } from "react";
import { apiKeyCoder2 } from "../utils/constants";
import ResVideoCard from "./ResVideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const SearchQueryRes = () => {
  const [resVideos, setResVideos] = useState([]);
  const searchQuery = localStorage.getItem("searchQuery");
  const youtube_api =
    "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=";

  useEffect(() => {
    getSearchVideos();
  }, [searchQuery]);

  const getSearchVideos = async () => {
    const data = await fetch(
      youtube_api + searchQuery + "&type=video&key=" + apiKeyCoder2
    );
    const json = await data.json();
    setResVideos(json.items);
  };


  return resVideos.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap m-2">
      {resVideos.map((res) => (
        <Link key={res.id.videoId} to={"/watch?v=" + res.id.videoId}>
          <ResVideoCard info={res} />
        </Link>
      ))}
    </div>
  );
};

export default SearchQueryRes;
