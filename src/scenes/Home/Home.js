import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ProductList } from '../components/Product/ProductList';
import { LoadMoreBtn } from './components/LoadMoreBtn';
import { Loading } from '../components/Loading/Loading';
import { SearchSortCategoriesTab } from './components/SearchSortCategoriesTab/SearchSortCategoriesTab';

import s from './Home.module.scss';

import api from '../../api';
import { addProducts, asyncRequest } from '../../store/actions';
import { NotFound } from './components/NotFount';

export function Home() {
	const dispatch = useDispatch();
	const store = useSelector((store) => store.products);

	useEffect(() => {
		async function fetch() {
			if (store.products.length) return;
			dispatch(asyncRequest({ action: addProducts, request: api.getProducts }));
		}
		fetch();
	}, [dispatch, store.products.length]);

	const loading = useSelector((store) => store.loading);

	return (
		<div className={s.home}>
			<Loading
				isLoading={loading.isLoading}
				text={store.products.length ? 'Searching...' : 'Loading...'}
			/>
			<SearchSortCategoriesTab />
			{typeof store.searchProduct[0] === 'string' ? (
				<NotFound />
			) : (
				<>
					{store.searchProduct.length ? (
						<>
							<ProductList items={store.searchProduct} />
							{store.searchProductPage.isMoreProducts ? <LoadMoreBtn /> : ''}
						</>
					) : (
						<>
							<ProductList items={store.products} />
							{store.productsPage.isMoreProducts ? <LoadMoreBtn /> : ''}
						</>
					)}
				</>
			)}
		</div>
	);
}
