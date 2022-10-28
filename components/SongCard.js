import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import PlayPause from "./PlayPause";
import { setActiveSong, playPause } from "../redux/features/playerSlice";

const SongCard = ({ song, i }) => {
  const activeSong = "Test";

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
          <PlayPause />
        </div>
        <Image src={song.images?.coverart} alt="song art" width={250} height={224} />
      </div>
    </div>
  );
};

export default SongCard;
