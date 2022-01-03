import React from 'react';
import { useDispatch } from 'react-redux';
import { setProductsFilterParams } from '../../../../../store/actions';

import Icon from '../../../../components/Icon';

import s from '../SearchSortCategoriesTab.module.scss';

export function ResetCategoryIcon() {
	const dispatch = useDispatch();

	const handleClick = (evt) => {
		dispatch(setProductsFilterParams({ category: '', fetchFrom: 0 }));
		evt.stopPropagation();
	};

	return (
		<Icon
			name='cross'
			width={'12'}
			height={'12'}
			onClick={handleClick}
			className={s.clearCategoryIcon}
		/>
	);
}
