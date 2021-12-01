import React from 'react';
import { useSelector } from 'react-redux';

import { SortDropDown } from './SortDropDown';
import { RemoveSorting } from './RemoveSorting';
import Icon from '../../../../components/Icon';

import s from '../SearchSortCategoriesTab.module.scss';
import { useDropDown } from '../../../../../utils/useDropDown';

export function Sorting() {
	const { isOpen, openMenu, closeMenu } = useDropDown('#dropDownSorting');

	const store = useSelector((store) => store.products);

	return (
		<div className={`${s.sorting} ${isOpen ? s.active : ''}`} onClick={openMenu}>
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
			{isOpen && <SortDropDown closeMenu={closeMenu} />}
		</div>
	);
}
