"use client";
import { genres } from "../../assets/constants";

const GenreSelector = () => {
  return (
    <select
      className="bg-black text-gray-300 text-sm rounded-lg outline-none mt-5 sm:mt-0 p-3 "
      onChange={() => {}}
      value=""
    >
      {genres.map((genre) => (
        <option key={genre.value} value={genre.value}>
          {genre.title}
        </option>
      ))}
    </select>
  );
};

export default GenreSelector;
