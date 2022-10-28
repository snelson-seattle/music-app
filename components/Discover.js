import SongList from "./SongList";
import GenreSelector from "./GenreSelector";

const Discover = ({ songs }) => {
  const genreTitle = "Pop";

  return (
    <div className="flex flex-col">
      <div className="w-full mt-4 mb-10 flex flex-col sm:flex-row justify-between items-center">
        <h2 className="text-3xl font-bold text-left">Discover {genreTitle}</h2>
        <GenreSelector />
      </div>
      <SongList songs={songs} />
    </div>
  );
};

export default Discover;
