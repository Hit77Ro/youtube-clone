import axios from "axios";
const BASE_URL = "https://yt-api.p.rapidapi.com";

const options = {
  // params: { hl: "en", gl: "US" },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },
};

// Modify your fetcher function to accept a setLoading callback
export const FetchApi = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
  } catch (error) {
    throw error;
  }
};
