const dev = process.env.NODE_ENV === 'development';
const API_URL = dev? 'http://192.168.1.18:1337':'https://kitchen.api.pixelclad.com';
export default API_URL;