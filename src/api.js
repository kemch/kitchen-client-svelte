const dev = process.env.NODE_ENV === 'development';
const API_URL = dev? 'http://localhost:1337':'http://3.135.235.251:1337';
export default API_URL;