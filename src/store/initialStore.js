export const initialStore = {
	viewer: { isLoggedIn: false, viewer: {} },
	loading: { isLoading: false, error: '' },
	products: {
		products: [],
		fetchFrom: 0,
		isMoreProducts: true,
		favorites: [],
		searchProduct: [],
	},
	cart: { items: [], totalCount: 0, totalPrice: 0 },
};
