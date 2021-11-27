import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SearchSortCategoriesTab } from './components/SearchSortCategoriesTab/SearchSortCategoriesTab';
import { SearchProductList } from './components/SearchProductList';
import { HomeProductList } from './components/HomeProductList';

import s from './Home.module.scss';

import api from '../../api';
import { asyncRequest, setProducts } from '../../store/actions';

export function Home() {
	const dispatch = useDispatch();
	const store = useSelector((store) => store.products);

	useEffect(() => {
		if (store.activeCategory) {
			dispatch(
				asyncRequest({
					action: setProducts,
					request: api.getProductsByCategory,
					params: { id: store.activeCategory.id, sort: store.sort },
				}),
			);
		} else {
			dispatch(
				asyncRequest({
					action: setProducts,
					request: api.getProducts,
					params: { sort: store.sort },
				}),
			);
		}
	}, [dispatch, store.sort, store.activeCategory]);

	return (
		<div className={s.home}>
			<SearchSortCategoriesTab />
			{store.searchProduct.length ? <SearchProductList /> : <HomeProductList />}
		</div>
	);
}
