
import axios from "axios";
import { API_URL } from "../../constants";

const apiBase = axios.create({
    baseURL: `${API_URL}/api`,
    headers: {
        "Accept": 'application/json',
        "Content-Type": 'application/json',
        "Authorization": `Bearer ${localStorage.getItem('accessToken_STM')}`
    }
})

export default apiBase;