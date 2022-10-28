"use client";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import GenreSelector from "./GenreSelector";
import SongList from "./SongList";

const Discover = ({ songs }) => {
  const genreTitle = "Pop";
  return (
    <Provider store={store}>
      <section className="flex flex-col">
        <div className="w-full mt-4 mb-10 flex flex-col sm:flex-row justify-between items-center">
          <h2 className="text-3xl font-bold text-left">
            Discover {genreTitle}
          </h2>
          <GenreSelector />
        </div>
        <SongList songs={songs} />
      </section>
    </Provider>
  );
};

export default Discover;
