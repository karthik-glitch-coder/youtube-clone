import React, { useEffect, useState } from "react";
import { apiKeyCoder } from "../utils/constants";
import ResVideoCard from "./ResVideoCard";
import { Link } from "react-router-dom";

const SearchQueryRes = () => {
  const [resVideos, setResVideos] = useState([]);
  const searchQuery = localStorage.getItem("searchQuery");
  const youtube_api =
    "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=";

  useEffect(() => {
    getSearchVideos();
  }, []);

  const getSearchVideos = async () => {
    const data = await fetch(
      youtube_api + searchQuery + "&type=video&key=" + apiKeyCoder
    );
    const json = await data.json();
    console.log(json.items);
    setResVideos(json.items);
  };

  if (!resVideos) return null;

  return (
    <div className="flex flex-wrap m-2">
      {resVideos.map((res) => (
        <Link to={"/watch?v=" + res.id.videoId}>
          <ResVideoCard key={res.id.videoId} info={res} />
        </Link>
      ))}
    </div>
  );
};

export default SearchQueryRes;
