import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Icon from '../../../../components/Icon';

import s from '../SearchSortCategoriesTab.module.scss';
import api from '../../../../../api';
import {
	asyncRequest,
	setProducts,
	setSort,
} from '../../../../../store/actions';

export function RemoveSorting() {
	const dispatch = useDispatch();

	const store = useSelector((store) => store.products);

	const handleRemoveSorting = (evt) => {
		dispatch(setSort(''));
		if (store.activeCategory) {
			dispatch(
				asyncRequest({
					action: setProducts,
					request: api.getProductsByCategory,
					params: { id: store.activeCategory.id, sort: '' },
				}),
			);
		} else {
			dispatch(
				asyncRequest({
					action: setProducts,
					request: api.getProducts,
					params: { sort: '' },
				}),
			);
		}
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
