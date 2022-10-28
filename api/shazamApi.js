import axios from "axios";

export default axios.create({
  baseURL: "https://shazam-core.p.rapidapi.com/v1",
  headers: {
    "X-RapidAPI-Key": process.env.API_KEY,
    "X-RapidAPI-Host": process.env.API_HOST,
  },
});
