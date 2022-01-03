import React from 'react';
import { useDispatch } from 'react-redux';
import { setProductsFilterParams } from '../../../../../store/actions';

import { DropDownList } from '../../../../components/DropDownList/DropDownList';

import s from '../SearchSortCategoriesTab.module.scss';

export function CategoriesContent({ categories }) {
	const dispatch = useDispatch();

	function handleClickOnDropDownItem(evt) {
		const category = evt.target.closest('li[item-id]');
		if (!category) return;
		const categoryId = category.getAttribute('item-id');
		dispatch(
			setProductsFilterParams({
				category: { id: categoryId, name: evt.target.innerHTML },
				fetchFrom: 0,
			}),
		);
	}

	return (
		<DropDownList
			items={categories}
			className={s.dropDownList}
			itemClassName={s.category}
			handleClickOnDropDownItem={handleClickOnDropDownItem}
		/>
	);
}
