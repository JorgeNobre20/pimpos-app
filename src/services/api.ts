import axios from "axios";

const api = axios.create({
  baseURL: "your_mockapi_key",
});

export default api;
