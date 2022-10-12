
export const API_URL = 'http://78ab-14-173-58-43.ngrok.io'
export const ACCESS_TOKEN = localStorage.getItem('accessToken')

export const setToken = (token) => localStorage.setItem('accessToken', token);