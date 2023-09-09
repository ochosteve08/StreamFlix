import axios from "axios";

export const API_URL = axios.create({
  baseURL: "https://www.omdbapi.com",
});

// export default API_URL;
