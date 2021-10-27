import React from 'react';
import { useSelector } from 'react-redux';

import { ProductList } from '../../components/Product/ProductList';
import { LoadMoreBtn } from './LoadMoreBtn';
import { Loading } from '../../components/Loading/Loading';

import s from '../Home.module.scss';

export function HomeProductList() {
	const store = useSelector((store) => store.products);

	const loading = useSelector((store) => store.loading);

	if (store.activeCategory && !store.products.length && !loading.isLoading) {
		return (
			<div className={s.noItemsInCategory}>No items in this category yet</div>
		);
	}

	return (
		<>
			<Loading isLoading={loading.isLoading} text={'Loading...'} />
			<ProductList items={store.products} />
			{store.productsPage.isMoreProducts ? <LoadMoreBtn /> : ''}
		</>
	);
}
