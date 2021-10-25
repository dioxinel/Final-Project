import React from 'react';
import { SearchProduct } from './components/SearchProduct';

import s from './SearchSortCategoriesTab.module.scss';

export function SearchSortCategoriesTab() {
	return (
		<div className={s.searchSortCategoriesTab}>
			<SearchProduct />
		</div>
	);
}
