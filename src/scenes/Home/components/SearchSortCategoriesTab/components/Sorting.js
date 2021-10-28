import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { SortDropDown } from './SortDropDown';
import { RemoveSorting } from './RemoveSorting';
import Icon from '../../../../components/Icon';

import s from '../SearchSortCategoriesTab.module.scss';

export function Sorting() {
	const [open, setOpen] = useState(false);

	const store = useSelector((store) => store.products);

	function outerClickListener(e) {
		const node = e.target.closest('#dropDownSorting');
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

	return (
		<div className={s.sortingContainer}>
			<div className={`${s.sorting} ${open ? s.active : ''}`} onClick={openMenu}>
				<Icon name='sort-icon' className={s.categoriesIcon} />
				{store.sort ? (
					<>
						<div>{store.sort === 'popular' ? 'popular' : 'new'}</div>
						<RemoveSorting />
					</>
				) : (
					<>
						<div>{'Sorting'}</div>
						<Icon name='arrow' fill={'#727272'} className={s.clearCategoryIcon} />
					</>
				)}
			</div>
			{open && <SortDropDown closeMenu={closeMenu} />}
		</div>
	);
}
