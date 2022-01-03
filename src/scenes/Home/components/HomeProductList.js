import React from 'react';
import { useSelector } from 'react-redux';

import { ProductList } from '../../components/Product/ProductList';
import { Loading } from '../../components/Loading/Loading';

import s from '../Home.module.scss';
import { NotFound } from './NotFound';

export function HomeProductList() {
	const store = useSelector((store) => store.products);
	const filterParams = useSelector(
		(store) => store.products.productsFilterParams,
	);
	const loading = useSelector((store) => store.loading);

	if (store.products.length === 0 && filterParams.keywords.length) {
		return <NotFound />;
	}

	if (store.activeCategory && !store.products.length && !loading.isLoading) {
		return <p className={s.noItemsInCategory}>No items in this category yet</p>;
	}

	return (
		<div className={s.productListContainer}>
			<Loading isLoading={loading.isLoading} text={'Loading...'} />
			<ProductList items={store.products} />
		</div>
	);
}
