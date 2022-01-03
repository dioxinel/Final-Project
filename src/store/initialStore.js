export const initialStore = {
	viewer: { isLoggedIn: false, viewer: {}, postAuthAction: '' },
	loading: { isLoading: false, error: '' },
	products: {
		products: [],
		productsFilterParams: {
			category: '',
			sort: '',
			fetchFrom: 0,
			isMoreProducts: true,
			keywords: '',
		},
		favorites: [],
	},
	cart: { items: [], totalCount: 0, totalPrice: 0 },
};
