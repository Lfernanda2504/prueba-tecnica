import React, { useState, useEffect } from "react";
import HeatMap from "../components/HeatMap";

const Episode = () => {
  const [Episode, setEpisode] = useState([]);
  useEffect(() => {
    getEpisodes();
  }, []);

  const getEpisodes = async () => {
    const url = "https://rickandmortyapi.com/api/episode";
    const res = await fetch(url);
    const info = await res.json();
    const { results } = info;
    console.log(results);

    const episodes = results.map((element) => {
      return {
        id: element.id,
        name: element.name,
        episode: element.episode,
        characters: element.characters
      };
    });
    setEpisode(episodes)
  };
  return (
    <div>
      < HeatMap Episode={Episode} />
    </div>
  );
};

export default Episode;
