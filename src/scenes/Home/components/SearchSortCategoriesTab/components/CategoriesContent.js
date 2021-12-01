import React from 'react';
import { useDispatch } from 'react-redux';

import { DropDownList } from '../../../../components/DropDownList/DropDownList';

import s from '../SearchSortCategoriesTab.module.scss';
import { setActiveCategory } from '../../../../../store/actions';

export function CategoriesContent({ closeMenu, categories }) {
	const dispatch = useDispatch();

	function handleClickOnDropDownItem(evt) {
		const category = evt.target.closest('li[item-id]');
		if (!category) return;
		const categoryId = category.getAttribute('item-id');
		dispatch(setActiveCategory({ id: categoryId, name: evt.target.innerHTML }));
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
