import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { SortDropDown } from './SortDropDown';
import { RemoveSorting } from './RemoveSorting';
import Icon from '../../../../components/Icon';

import s from '../SearchSortCategoriesTab.module.scss';

export function Sorting() {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		return () => {
			setOpen(false);
		};
	}, []);

	const store = useSelector((store) => store.products);

	function closeMenu() {
		setOpen(false);
	}

	function openMenu() {
		if (open) return closeMenu();
		setOpen(true);
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
