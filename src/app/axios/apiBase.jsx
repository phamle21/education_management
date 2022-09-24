import axios from "axios";
import { ACCESS_TOKEN, API_URL } from "../../constant/api_constant";


const instance = axios.create({
    baseURL: API_URL + '/api',
    headers: {
        "Content-Type": 'application/json',
        "Authorization": `Bearer ${ACCESS_TOKEN}`
    }
})

export default instance;