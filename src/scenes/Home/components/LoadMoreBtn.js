import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import { useDispatch, useSelector } from 'react-redux';
import { addProducts, addSearchProduct } from '../../../store/actions';
import { useAsyncRequest } from '../../../useAsyncRequest';

import s from '../Home.module.scss';

import api from '../../../api';

export function LoadMoreBtn() {
	const store = useSelector((store) => store.products);
	const { asyncRequest, isLoading } = useAsyncRequest();
	const dispatch = useDispatch();

	const handleClick = async () => {
		if (store.searchProduct.length) {
			const res = await asyncRequest(api.searchProduct, {
				fetchFrom: store.searchProductPage.fetchFrom,
				keywords: store.searchProductPage.keywords,
			});

			if (typeof res === 'string') {
				return;
			}

			dispatch(addSearchProduct(res));
			return;
		}

		const res = await asyncRequest(api.getProducts, store.productsPage.fetchFrom);

		if (typeof res === 'string') {
			return;
		}

		dispatch(addProducts(res));
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
