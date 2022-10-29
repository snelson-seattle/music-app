import { genres } from "../assets/constants";

const GenreSelector = () => {
  return (
    <select
      onChange={() => {}}
      value=""
      className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none mt-5 sm:mt=0 mr-8"
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
