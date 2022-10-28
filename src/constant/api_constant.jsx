
export const API_URL = 'http://a920-14-183-90-221.ngrok.io'
export const ACCESS_TOKEN = localStorage.getItem('accessToken')

export const setToken = (token) => localStorage.setItem('accessToken', token);