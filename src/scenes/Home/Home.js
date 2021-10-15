import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addProducts, asyncRequest } from '../../store/actions';
import { ProductList } from '../components/Product/ProductList';
import { LoadMoreBtn } from './components/LoadMoreBtn';
import { Loading } from '../components/Loading/Loading';

import s from './Home.module.scss';

import api from '../../api';

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

	if (loading.isLoading) {
		return <Loading isLoading={loading.isLoading} />;
	}

	return (
		<div className={s.home}>
			{store.products.length ? <ProductList items={store.products} /> : 'home'}
			{store.isMoreProducts ? <LoadMoreBtn /> : ''}
		</div>
	);
}
