export const API_URL = "https://ghibliapi.herokuapp.com";

export const DEFAULT_HEADERS = (headers: {[key: string]: string}) => ({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    ...headers,
})