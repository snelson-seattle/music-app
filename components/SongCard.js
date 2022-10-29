import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import PlayPause from "./PlayPause";
import { setActiveSong, playPause } from "../redux/features/playerSlice";

const SongCard = ({ song, i, isPlaying, activeSong, songs }) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({song, songs, i}));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.title === song.title
              ? "flex bg-black bg-opacity-70"
              : "hidden"
          }`}
        >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <Image
          src={song.images?.coverart}
          alt="song art"
          width={250}
          height={224}
        />
      </div>
      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg truncate">
          <Link href={`/songs/${song?.key}`}>{song.title}</Link>
        </p>
        <p className="text-sm text-gray-300 mt-1">
          <Link
            href={
              song.artists
                ? `/artists/${song?.artists[0]?.adamid}`
                : "/top-artists"
            }
          >
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
