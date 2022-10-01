
export const API_URL = 'http://2c9a-113-184-178-77.ngrok.io'
export const ACCESS_TOKEN = localStorage.getItem('accessToken')

export const setToken = (token) => localStorage.setItem('accessToken', token);