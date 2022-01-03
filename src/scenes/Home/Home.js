import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';

import { SearchSortCategoriesTab } from './components/SearchSortCategoriesTab/SearchSortCategoriesTab';
import { HomeProductList } from './components/HomeProductList';

import s from './Home.module.scss';

import api from '../../api';
import {
	addProducts,
	asyncRequestProducts,
	setProducts,
	setProductsFilterParams,
} from '../../store/actions';

export function Home() {
	const dispatch = useDispatch();
	const { category, sort, fetchFrom, isMoreProducts, keywords, isFetching } =
		useSelector((store) => store.products.productsFilterParams);

	useEffect(() => {
		dispatch(setProductsFilterParams({ isFetching: true, isMoreProducts: true }));
	}, [category, sort, keywords, dispatch]);

	useEffect(() => {
		function handleScroll(e) {
			if (
				e.target.documentElement.scrollHeight -
					(e.target.documentElement.scrollTop + window.innerHeight) <
					100 &&
				isMoreProducts &&
				!isFetching
			) {
				dispatch(setProductsFilterParams({ isFetching: true }));
			}
		}
		document.addEventListener('scroll', handleScroll);
		return () => {
			document.removeEventListener('scroll', handleScroll);
		};
	}, [isMoreProducts, isFetching, dispatch]);

	useEffect(() => {
		if (isFetching) {
			dispatch(
				asyncRequestProducts({
					action: fetchFrom ? addProducts : setProducts,
					request: keywords
						? api.searchProduct
						: category
						? api.getProductsByCategory
						: api.getProducts,
					params: { category, sort, fetchFrom, keywords },
					loading: !fetchFrom,
				}),
			);
		}
	}, [dispatch, category, sort, fetchFrom, isFetching, keywords]);

	return (
		<div className={s.home}>
			<SearchSortCategoriesTab />
			<HomeProductList />
			<div className={s.loader}>
				<ClipLoader color='#fd7114' loading={isFetching} size={45} />
			</div>
		</div>
	);
}
