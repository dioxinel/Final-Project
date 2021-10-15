export const initialStore = {
	viewer: { isLoggedIn: false, viewer: {} },
	loading: { isLoading: false, error: '' },
	products: { products: [], fetchFrom: 0, isMoreProducts: true, favorites: [] },
};
