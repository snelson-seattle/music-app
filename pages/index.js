import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentSongs } from "../redux/features/playerSlice";
import shazamApi from "../api/shazamApi";
import Discover from "../components/Discover";


export const getServerSideProps = async () => {
  const { data } = await shazamApi.get("/charts/world");

  return {
    props: { data },
  };
};

export default function Home({ data }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const setSongs = () => {
      dispatch(setCurrentSongs(data));
    }

    setSongs();
    
  }, [])

  return (
    <>
      <Discover songs={data} />
    </>
  );
}
