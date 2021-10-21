import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import Icon from '../Icon';

import s from './Header.module.scss';

export function HeaderCartIcon() {
	const store = useSelector((store) => store.cart);
	const history = useHistory();
	const handleClick = () => {
		history.push('/account/cart');
	};
	return (
		<div className={s.cartContainer} onClick={handleClick}>
			<Icon name={'header-cart'} className={s.cartIcon} />
			{store.totalCount ? <p>{store.totalCount}</p> : ''}
		</div>
	);
}
