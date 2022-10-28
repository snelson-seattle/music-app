import { use } from "react";
import api from "../api/shazamApi";

const getWorldCharts = async () => {
  const response = await api.get("/charts/world");
  return response.data;
};

const Home = () => {
  let songs = use(getWorldCharts());
  console.log(songs);
  return <div>App goes here.</div>;
};

export default Home;
