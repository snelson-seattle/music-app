import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import MusicPlayer from "../components/MusicPlayer";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="relative flex h-screen">
        <div className="flex-1 flex flex-col">
          <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex flex-col-reverse xl:flex-row">
            <div className="flex-1 h-fit pb-40">
              <Component {...pageProps} />
            </div>
            <div className="xl:sticky relative top-0 h-fit">

            </div>
          </div>
        </div>
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      </div>
    </Provider>
  );
}

export default MyApp;
