import SongCard from "./SongCard"

const SongList = ({songs}) => {
  return (
    <div className="flex flex-wrap justify-center sm:justify-start gap-8">
        {songs.map((song, index) => (<SongCard key={song.key} song={song} i={index} />))}
    </div>
  )
}

export default SongList