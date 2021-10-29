import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { clearProductsStore } from '../../../../store/actions';

import Icon from '../../Icon';

import s from '../Header.module.scss';

export function Logo() {
	const history = useHistory();
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(clearProductsStore());
		history.push('/');
	};

	return <Icon name={'logo'} onClick={handleClick} className={s.logo} />;
}
