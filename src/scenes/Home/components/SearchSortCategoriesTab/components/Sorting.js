import React from 'react';
import { useSelector } from 'react-redux';

import { SortDropDown } from './SortDropDown';
import { RemoveSorting } from './RemoveSorting';
import Icon from '../../../../components/Icon';

import s from '../SearchSortCategoriesTab.module.scss';
import { useDropDown } from '../../../../../utils/useDropDown';

export function Sorting() {
	const { isOpen, openMenu, closeMenu } = useDropDown('#dropDownSorting');

	const filterParams = useSelector(
		(store) => store.products.productsFilterParams,
	);

	const sort = filterParams.sort;

	return (
		<div className={`${s.sorting} ${isOpen ? s.active : ''}`} onClick={openMenu}>
			<Icon name='sort-icon' className={s.categoriesIcon} />
			{sort ? (
				<>
					<div>{sort === 'popular' ? 'popular' : 'new'}</div>
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
