class SessionStorageApi {
	constructor() {
		this.cart = JSON.parse(window.sessionStorage.getItem('cart'))
			? JSON.parse(window.sessionStorage.getItem('cart'))
			: [];
	}
	addItem(item) {
		this.cart.push(item);
		const newCart = this.cart;
		window.sessionStorage.setItem('cart', JSON.stringify(newCart));
	}
	removeItem(id) {
		const newCart = this.cart.filter((item) => {
			return item.id !== id;
		});
		window.sessionStorage.setItem('cart', JSON.stringify(newCart));
		this.cart = newCart;
	}
}

export default new SessionStorageApi();
