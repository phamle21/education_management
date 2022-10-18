
export const API_URL = 'https://5aed-113-185-77-93.ngrok.io'
export const ACCESS_TOKEN = localStorage.getItem('accessToken')

export const setToken = (token) => localStorage.setItem('accessToken', token);