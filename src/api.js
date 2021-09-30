import axios from "axios";

class Api {
  constructor() {
    this._token = "";
    this.headers = { "Content-Type": "application/json" };
  }

  register({ fullName, email, password, phone }) {
    return axios.post('/api/api/auth/register', {
      email,
      password,
      fullName,
      phone
    });
  }
}

export default new Api();