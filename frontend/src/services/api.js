import axios from 'axios';

// DEPLOY
const api = axios.create({
	baseURL: '/'
});

// LOCALHOST
// const api = axios.create({
// 	baseURL: 'http://localhost:3333'
// });

export default api;