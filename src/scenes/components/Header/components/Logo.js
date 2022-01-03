import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { setProductsFilterParams } from '../../../../store/actions';

import Icon from '../../Icon';

import s from '../Header.module.scss';

export function Logo() {
	const dispatch = useDispatch();
	const history = useHistory();

	const handleClick = (evt) => {
		evt.preventDefault();
		history.push('/');
		dispatch(
			setProductsFilterParams({
				category: '',
				sort: '',
				fetchFrom: 0,
				keywords: '',
				isMoreProducts: true,
			}),
		);
	};

	return (
		<a href={'/'} onClick={handleClick}>
			<Icon name={'logo'} className={s.logo} />
		</a>
	);
}
