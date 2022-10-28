import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { playPause, setActiveSong } from "../../redux/features/playerSlice";
import PlayPause from "./PlayPause";

const SongCard = ({ song, i }) => {
  const activeSong = "test";
  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.title === song.title
              ? "flex bg-black bg-opacity-70"
              : "hidden"
          }`}
        >
          <PlayPause />
        </div>
        {/* <Image
          alt="song art"
          src={song.images?.coverart}
          width={100}
          height={100}
        /> */}
      </div>
      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg truncate">
          <Link href={`/songs/${song?.key}`}>{song.title}</Link>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          <Link href={song.artists ? `/artists/${song?.artists[0]?.adamid}` : "/top-artists" }>{song.subtitle}</Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
