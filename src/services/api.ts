import axios from "axios";

const api = axios.create({
  baseURL: "https://api7.cloudframework.io/recruitment/fullstack",
  headers: {
    "X-WEB-KEY": "Development"
  }
});

export default api;