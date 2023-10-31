import axios from "axios";

const baseUrl =  'http://localhost:3000';
const apiClient = axios.create({
    baseURL: baseUrl,
    withCredentials: false,
})

export default {
    addCard (payload) {
        return apiClient.post('/cards', payload)
    }
}