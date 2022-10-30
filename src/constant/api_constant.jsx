export const API_URL = 'http://localhost:8000'
export const ACCESS_TOKEN = localStorage.getItem('accessToken')

export const setToken = (token) => localStorage.setItem('accessToken', token);