import axios from 'axios'


// Aqui configuro a base do axios com a api, com a URLBase local.
const api = axios.create({
    baseURL: "http://localhost:5200/"
})

export default api