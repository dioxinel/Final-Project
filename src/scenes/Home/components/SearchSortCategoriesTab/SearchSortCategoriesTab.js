import React from 'react';

import { Categories } from './components/Categories';
import { SearchProduct } from './components/SearchProduct';

import s from './SearchSortCategoriesTab.module.scss';

export function SearchSortCategoriesTab() {
	return (
		<div className={s.searchSortCategoriesTab}>
			<SearchProduct />
			<Categories />
		</div>
	);
}
