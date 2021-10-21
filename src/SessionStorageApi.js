import { getItemById } from './utils';

class SessionStorageApi {
	constructor() {
		this.cart = JSON.parse(window.sessionStorage.getItem('cart'))
			? JSON.parse(window.sessionStorage.getItem('cart'))
			: [];
		this.totalCount = 0;
		this.totalPrice = 0;
	}
	addItem(item) {
		const double = getItemById(this.cart, item.id);
		if (double) {
			double.count = double.count + 1;
		} else {
			const newItem = { ...item, count: 1 };
			this.cart.push(newItem);
		}
		const newCart = this.cart;
		window.sessionStorage.setItem('cart', JSON.stringify(newCart));
		this.getFullPrice();
	}
	removeItem(id) {
		const newCart = this.cart.filter((item) => {
			return item.id !== id;
		});
		window.sessionStorage.setItem('cart', JSON.stringify(newCart));
		this.cart = newCart;
		this.getFullPrice();
	}

	setItemCount(id, count) {
		const item = getItemById(this.cart, id);
		item.count = count;
		this.cart = [item, ...this.cart.filter((item) => item.id !== id)];

		const newCart = this.cart;
		window.sessionStorage.setItem('cart', JSON.stringify(newCart));
		this.getFullPrice();
	}

	getFullPrice() {
		this.cart.forEach((item) => {
			this.totalPrice += item.count * item.price;
			this.totalCount += item.count;
		});
	}
}

export default new SessionStorageApi();
