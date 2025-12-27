import axios from 'axios'

const api = axios.create({
    baseURL: "https://skillswap-server-jloo.onrender.com"
    // baseURL: "http://localhost:5004/api"
})

export default api