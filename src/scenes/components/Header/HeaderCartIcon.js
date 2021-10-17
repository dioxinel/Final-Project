import React from 'react';
import { useHistory } from 'react-router';

import Icon from '../Icon';

import s from './Header.module.scss';

export function HeaderCartIcon() {
	const history = useHistory();
	const handleClick = () => {
		history.push('/account/cart');
	};
	return (
		<Icon name={'header-cart'} onClick={handleClick} className={s.cartIcon} />
	);
}
