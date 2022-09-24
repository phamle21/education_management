
export const API_URL = 'http://6e20-14-160-179-123.ngrok.io'
export const ACCESS_TOKEN = localStorage.getItem('accessToken')

export const setToken = (token) => localStorage.setItem('accessToken', token);