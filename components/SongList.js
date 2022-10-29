import SongCard from "./SongCard"
import { useDispatch, useSelector } from "react-redux"

const SongList = ({songs}) => {
  const {activeSong, isPlaying} = useSelector((state) => state.player);

  return (
    <div className="flex flex-wrap justify-center sm:justify-start gap-8">
        {songs.map((song, index) => (<SongCard key={song.key} song={song} i={index} isPlaying={isPlaying} activeSong={activeSong} />))}
    </div>
  )
}

export default SongList