import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { DropDownList } from '../../../../components/DropDownList/DropDownList';

import s from '../SearchSortCategoriesTab.module.scss';
import { setActiveCategory } from '../../../../../store/actions';

export function CategoriesContent({ closeMenu, categories }) {
	const dispatch = useDispatch();

	useEffect(() => {
		function outerClickListener(e) {
			const node = e.target.closest('#dropDownList');

			if (!node) {
				closeMenu();
			}
		}

		window.addEventListener('click', outerClickListener);
		return () => {
			window.removeEventListener('click', outerClickListener);
		};
	}, [closeMenu]);

	function handleClickOnDropDownItem(evt) {
		const category = evt.target.closest('div[item-id]');
		if (!category) return;
		const categoryId = category.getAttribute('item-id');
		dispatch(setActiveCategory({ id: categoryId, name: evt.target.innerHTML }));
		closeMenu();
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
