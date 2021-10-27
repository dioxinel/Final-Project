import React from 'react';
import { useSelector } from 'react-redux';

import { NotFound } from './NotFound';
import { ProductList } from '../../components/Product/ProductList';
import { LoadMoreBtn } from './LoadMoreBtn';
import { Loading } from '../../components/Loading/Loading';

export function SearchProductList() {
	const store = useSelector((store) => store.products);

	const loading = useSelector((store) => store.loading);

	return (
		<>
			<Loading isLoading={loading.isLoading} text={'Searching...'} />
			{typeof store.searchProduct[0] === 'string' ? (
				<NotFound />
			) : (
				<>
					<ProductList items={store.searchProduct} />
					{store.searchProductPage.isMoreProducts ? <LoadMoreBtn /> : ''}
				</>
			)}
		</>
	);
}
