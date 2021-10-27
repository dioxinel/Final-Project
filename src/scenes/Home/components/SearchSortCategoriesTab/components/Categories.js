import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ResetCategoryIcon } from './ResetCategoryIcon';
import { DropDownList } from '../../../../components/DropDownList/DropDownList';
import Icon from '../../../../components/Icon';

import s from '../SearchSortCategoriesTab.module.scss';
import api from '../../../../../api';
import { setActiveCategory } from '../../../../../store/actions';
import { useAsyncRequest } from '../../../../../useAsyncRequest';

export function Categories() {
	const { asyncRequest } = useAsyncRequest();
	const [categories, setCategories] = useState([]);
	const [open, setOpen] = useState(false);

	const activeCategory = useSelector((store) => store.products.activeCategory);
	const dispatch = useDispatch();

	useEffect(() => {
		if (categories.length) return;
		async function fetch() {
			const res = await asyncRequest(api.getCategories);

			if (typeof res === 'string') {
				return;
			}
			setCategories(res);
		}
		fetch();
	}, [asyncRequest, categories]);

	function outerClickListener(e) {
		const node = e.target.closest('#dropDownList');

		if (!node) {
			closeMenu();
		}
	}

	function closeMenu() {
		document.removeEventListener('click', outerClickListener);
		setOpen(false);
	}

	function openMenu(evt) {
		document.addEventListener('click', outerClickListener);
		if (open) return closeMenu();
		setOpen(true);
		evt.stopPropagation();
	}

	function handleClickOnDropDownItem(evt) {
		const category = evt.target.closest('div[item-id]');
		if (!category) return;
		const categoryId = category.getAttribute('item-id');
		dispatch(setActiveCategory({ id: categoryId, name: evt.target.innerHTML }));
		closeMenu();
	}

	return (
		<div className={s.categoriesContainer}>
			<div
				className={`${s.categories} ${open ? s.active : ''}`}
				onClick={openMenu}
			>
				<Icon name='categories-icon' className={s.categoriesIcon} />
				{activeCategory ? (
					<>
						<div>{activeCategory.name}</div>
						<ResetCategoryIcon />
					</>
				) : (
					<>
						<div>{'Choose category'}</div>
						<Icon name='arrow' fill={'#727272'} className={s.clearCategoryIcon} />
					</>
				)}
			</div>
			{open && (
				<DropDownList
					items={categories}
					className={s.dropDownList}
					itemClassName={s.category}
					handleClickOnDropDownItem={handleClickOnDropDownItem}
				/>
			)}
		</div>
	);
}
