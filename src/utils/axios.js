import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://astromaze.onrender.com",
  // baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

export default customFetch;
