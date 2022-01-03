import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Icon from '../../../../components/Icon';

import s from '../SearchSortCategoriesTab.module.scss';
import { useDebounce } from '../../../../../utils/utils';
import { setProductsFilterParams } from '../../../../../store/actions';

export function SearchProduct() {
	const [keyword, setKeyword] = useState('');

	const dispatch = useDispatch();

	const debouncedSearchTerm = useDebounce(keyword, 300);

	useEffect(() => {
		if (debouncedSearchTerm.length > 3 && debouncedSearchTerm.length < 50) {
			dispatch(
				setProductsFilterParams({
					keywords: debouncedSearchTerm.toLowerCase(),
					fetchFrom: 0,
				}),
			);
		} else {
			dispatch(setProductsFilterParams({ keywords: '', fetchFrom: 0 }));
		}
	}, [debouncedSearchTerm, dispatch]);

	const handleChange = async (evt) => {
		setKeyword(evt.target.value);
	};

	return (
		<div className={s.searchProduct}>
			<Icon name={'search-icon'} />
			<input
				className={s.searchInput}
				onChange={handleChange}
				value={keyword}
				placeholder={'Search products by name'}
			/>
		</div>
	);
}
