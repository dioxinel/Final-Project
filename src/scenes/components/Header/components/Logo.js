import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { clearProductsStore } from '../../../../store/actions';

import Icon from '../../Icon';

import s from '../Header.module.scss';

export function Logo() {
	const history = useHistory();
	const dispatch = useDispatch();

	const handleClick = (evt) => {
		evt.preventDefault();
		dispatch(clearProductsStore());
		history.push('/');
	};

	return (
		<a href={'/'} onClick={handleClick}>
			<Icon name={'logo'} className={s.logo} />
		</a>
	);
}
