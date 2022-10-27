import React, {useState} from "react";
import { genres } from "../assets/constants";

const GenreSelect: React.FC = () => {
  const [genreTitle, setGenreTitle] = useState("New Music");

  return (
    <>
      <h2 className="font-bold text-3xl text-white">Discover {genreTitle}</h2>
      <select
        className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none mt-5 sm:mt-0"
        onChange={(e) => {setGenreTitle(e.target.value)}}
        value=""
      >
        {genres.map((genre) => (
          <option key={genre.title}>{genre.title}</option>
        ))}
      </select>
    </>
  );
};

export default GenreSelect;
