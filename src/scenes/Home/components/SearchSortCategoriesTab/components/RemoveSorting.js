import React from 'react';
import { useDispatch } from 'react-redux';
import { setProductsFilterParams } from '../../../../../store/actions';

import Icon from '../../../../components/Icon';

import s from '../SearchSortCategoriesTab.module.scss';

export function RemoveSorting() {
	const dispatch = useDispatch();

	const handleRemoveSorting = (evt) => {
		dispatch(
			setProductsFilterParams({ sort: '', fetchFrom: 0, isFetching: true }),
		);
		evt.stopPropagation();
	};

	return (
		<Icon
			name='cross'
			className={s.clearCategoryIcon}
			onClick={handleRemoveSorting}
			width={'12'}
			height={'12'}
		/>
	);
}
