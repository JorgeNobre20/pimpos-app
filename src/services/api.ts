import axios from "axios";

const api = axios.create({
    baseURL: "https://5fa8845fc9b4e90016e696fe.mockapi.io"
});

export default api;