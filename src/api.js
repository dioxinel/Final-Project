class Api {
  constructor() {
    this._token = "";
    this.headers = { "Content-Type": "application/json" };
  }
}

export default new Api();