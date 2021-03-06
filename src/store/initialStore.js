export const initialStore = {
	viewer: { isLoggedIn: false, viewer: {}, postAuthAction: '' },
	loading: { isLoading: false, error: '' },
	products: {
		products: [],
		productsPage: { isMoreProducts: true, fetchFrom: 0 },
		favorites: [],
		searchProduct: [],
		searchProductPage: { isMoreProducts: true, fetchFrom: 0, keywords: '' },
		activeCategory: '',
		sort: '',
	},
	cart: { items: [], totalCount: 0, totalPrice: 0 },
};
