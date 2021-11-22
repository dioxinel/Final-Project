import React from 'react';
import { useSelector } from 'react-redux';

import { Categories } from './components/Categories';
import { SearchProduct } from './components/SearchProduct';
import { Sorting } from './components/Sorting';

import s from './SearchSortCategoriesTab.module.scss';

export function SearchSortCategoriesTab() {
	const store = useSelector((store) => store.products);

	return (
		<div
			className={`${s.searchSortCategoriesTab} ${
				store.searchProduct.length && s.searched
			}`}
		>
			<SearchProduct />
			{!store.searchProduct.length ? (
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
