export const API_URL = 'http://127.0.0.1:8000'
export const ACCESS_TOKEN = localStorage.getItem('accessToken')

export const setToken = (token) => localStorage.setItem('accessToken', token);