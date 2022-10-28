import axios from "axios";
import { ACCESS_TOKEN, API_URL } from "../../constant/api_constant";


const instance = axios.create({
    baseURL: API_URL + '/api',
    headers: {
        "Content-Type": "multipart/form-data; application/json; charset=utf-8",
        "Accept": "application/json",
        "type": "formData",
        "Authorization": `Bearer ${ACCESS_TOKEN}`
    }
})

export default instance;