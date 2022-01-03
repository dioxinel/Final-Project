import React from 'react';
import { useDispatch } from 'react-redux';
import { setProductsFilterParams } from '../../../../../store/actions';

import s from '../SearchSortCategoriesTab.module.scss';

export function SortDropDown({ closeMenu }) {
	const dispatch = useDispatch();

	function handleClickOnDropDownItem(evt) {
		const sort = evt.target.closest('p');
		if (!sort) return;

		let sorting;
		if (sort.innerHTML === 'Popular') {
			sorting = 'popular';
		} else {
			sorting = 'latest';
		}
		dispatch(setProductsFilterParams({ sort: sorting, fetchFrom: 0 }));
		closeMenu();
	}

	return (
		<div
			onClick={handleClickOnDropDownItem}
			id={'dropDownSorting'}
			className={s.dropDownSorting}
		>
			<p>Popular</p>
			<p>New</p>
		</div>
	);
}
