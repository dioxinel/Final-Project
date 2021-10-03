import axios from 'axios';

class Api {
	constructor() {
		this._token = null;
		this.headers = { 'Content-Type': 'application/json' };
	}

	setToken(token) {
		this._token = token;
		window.localStorage.setItem('___token', token);
		axios.defaults.headers.common.Authorization = `Bearer ${token}`;
	}

	isLoggedIn() {
		return !!this._token;
	}

	logout() {
		this.setToken('');
	}

	register({ fullName, email, password, phone }) {
		return axios.post('/api/api/auth/register', {
			email,
			password,
			fullName,
			phone,
		});
	}

	login({ email, password }) {
		return axios.post('/api/api/auth/login', {
			email,
			password,
		});
	}

	getViewer() {
		return axios.get('/api/api/account');
	}
}

export default new Api();
