import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../api';
import { addProducts, asyncRequest } from '../../store/actions';
import { ProductList } from '../components/Product/ProductList';
import s from './Home.module.scss';

export function Home() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(asyncRequest({ action: addProducts, request: api.getProducts }));
	}, [dispatch]);

	const store = useSelector((store) => store.products);

	return (
		<div className={s.home}>
			{store.products.length ? <ProductList items={store.products} /> : 'home'}
		</div>
	);
}
