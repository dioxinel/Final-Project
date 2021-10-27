import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { useDispatch, useSelector } from 'react-redux';

import s from '../Home.module.scss';
import api from '../../../api';
import { addProducts, addSearchProduct } from '../../../store/actions';
import { useAsyncRequest } from '../../../useAsyncRequest';

export function LoadMoreBtn() {
	const store = useSelector((store) => store.products);
	const { asyncRequest, isLoading } = useAsyncRequest();
	const dispatch = useDispatch();

	const fetchSearchProducts = async () => {
		const res = await asyncRequest(api.searchProduct, {
			fetchFrom: store.searchProductPage.fetchFrom,
			keywords: store.searchProductPage.keywords,
		});

		if (typeof res === 'string') {
			return;
		}

		dispatch(addSearchProduct(res));
		return;
	};

	const fetchCategoryProducts = async () => {
		const res = await asyncRequest(api.getProductsByCategory, {
			id: store.activeCategory.id,
			fetchFrom: store.productsPage.fetchFrom,
		});

		if (typeof res === 'string') {
			return;
		}

		dispatch(addProducts(res));
		return;
	};

	const fetchProducts = async () => {
		const res = await asyncRequest(api.getProducts, store.productsPage.fetchFrom);

		if (typeof res === 'string') {
			return;
		}

		dispatch(addProducts(res));
	};

	const handleClick = () => {
		if (store.searchProduct.length) {
			fetchSearchProducts();
		} else if (store.activeCategory) {
			fetchCategoryProducts();
		} else {
			fetchProducts();
		}
	};

	return (
		<button className={s.loadMoreBtn} onClick={handleClick}>
			{isLoading ? (
				<ClipLoader color='#fff' loading={isLoading} size={15} />
			) : (
				'Load more...'
			)}
		</button>
	);
}
