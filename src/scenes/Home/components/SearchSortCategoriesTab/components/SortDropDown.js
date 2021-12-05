import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import s from '../SearchSortCategoriesTab.module.scss';

import api from '../../../../../api';
import {
	asyncRequest,
	setProducts,
	setSort,
} from '../../../../../store/actions';

export function SortDropDown({ closeMenu }) {
	const dispatch = useDispatch();
	const store = useSelector((store) => store.products);

	function handleClickOnDropDownItem(evt) {
		const sort = evt.target.closest('p');
		if (!sort) return;

		let sorting;
		if (sort.innerHTML === 'Popular') {
			sorting = 'popular';
		} else {
			sorting = 'latest';
		}

		dispatch(setSort(sorting));
		if (store.activeCategory) {
			dispatch(
				asyncRequest({
					action: setProducts,
					request: api.getProductsByCategory,
					params: { id: store.activeCategory.id, sort: sorting },
				}),
			);
		} else {
			dispatch(
				asyncRequest({
					action: setProducts,
					request: api.getProducts,
					params: { sort: sorting },
				}),
			);
		}
		closeMenu();
	}

	return (
		<div onClick={handleClickOnDropDownItem} className={s.dropDownSorting}>
			<p>Popular</p>
			<p>New</p>
		</div>
	);
}
