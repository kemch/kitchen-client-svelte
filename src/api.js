const dev = process.env.NODE_ENV === 'development';
const API_URL = dev? 'http://localhost:1337/api':'https://kitchen.api.pixelclad.com/api';
export default API_URL;