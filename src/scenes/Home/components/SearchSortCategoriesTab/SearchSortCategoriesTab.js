import React from 'react';
import { useSelector } from 'react-redux';

import { Categories } from './components/Categories';
import { SearchProduct } from './components/SearchProduct';
import { Sorting } from './components/Sorting';

import s from './SearchSortCategoriesTab.module.scss';

export function SearchSortCategoriesTab() {
	const { keywords } = useSelector(
		(store) => store.products.productsFilterParams,
	);

	return (
		<div className={`${s.searchSortCategoriesTab} ${keywords && s.searched}`}>
			<SearchProduct />
			{!keywords ? (
				<>
					<Categories />
					<Sorting />
				</>
			) : (
				''
			)}
		</div>
	);
}
