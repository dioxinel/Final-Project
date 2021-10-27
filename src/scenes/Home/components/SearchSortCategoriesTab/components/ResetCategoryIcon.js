import React from 'react';
import { useDispatch } from 'react-redux';

import Icon from '../../../../components/Icon';

import s from '../SearchSortCategoriesTab.module.scss';
import { setActiveCategory } from '../../../../../store/actions';

export function ResetCategoryIcon() {
	const dispatch = useDispatch();

	const handleClick = (evt) => {
		dispatch(setActiveCategory(''));
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
