import axios from 'axios'

const BACKEND_URL = 'http://localhost:4242'

export const boatApi = axios.create({
    baseURL: BACKEND_URL,
});