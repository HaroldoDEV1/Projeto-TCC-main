import axios from "axios"

export const api = axios.create({
    baseURL:  "http://192.168.234.67:3000"
})