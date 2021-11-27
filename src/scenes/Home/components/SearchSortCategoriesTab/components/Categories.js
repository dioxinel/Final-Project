import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ResetCategoryIcon } from './ResetCategoryIcon';
import { CategoriesContent } from './CategoriesContent';

import Icon from '../../../../components/Icon';

import s from '../SearchSortCategoriesTab.module.scss';
import api from '../../../../../api';

import { useAsyncRequest } from '../../../../../useAsyncRequest';

export function Categories() {
	const { asyncRequest } = useAsyncRequest();
	const [categories, setCategories] = useState([]);
	const [open, setOpen] = useState(false);

	const activeCategory = useSelector((store) => store.products.activeCategory);

	useEffect(() => {
		if (categories.length) return;
		async function fetch() {
			setCategories('fetching');
			const res = await asyncRequest(api.getCategories);

			if (typeof res === 'string') {
				setCategories([{ id: 0, name: 'error' }]);
				return;
			}
			setCategories(res);
		}
		fetch();
	}, [asyncRequest, categories.length]);

	useEffect(() => {
		return () => {
			setCategories([]);
		};
	}, []);

	function closeMenu() {
		setOpen(false);
	}

	function openMenu() {
		if (open) return closeMenu();
		setOpen(true);
	}

	return (
		<div className={`${s.categories} ${open ? s.active : ''}`} onClick={openMenu}>
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
			{open && <CategoriesContent closeMenu={closeMenu} categories={categories} />}
		</div>
	);
}
