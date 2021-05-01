import client from "./api";

const API_KEY = "38c47d45da6c03164cf7bf752f9bb11f";

export const fetchTrending = () => {
  return client.get(`/trending/all/week?api_key=${API_KEY}`);
};

export const fetchToprated = () => {
  return client.get(`/movie/top_rated?api_key=${API_KEY}`);
};

export const fetchUpcoming = () => {
  return client.get(`/movie/upcoming?api_key=${API_KEY}`);
};
