import { use } from "react";
import api from "../api/shazamApi";
import Discover from "../components/Discover";

const getWorldCharts = async () => {
  const response = await api.get("/charts/world");
  return response.data;
};

const Home = () => {
  let songs = use(getWorldCharts());
  
  return (
    <>
      <Discover songs={songs} />
    </>
  );
};

export default Home;
