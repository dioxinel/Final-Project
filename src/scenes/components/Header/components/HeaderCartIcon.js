import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import Icon from '../../Icon';

import s from '../Header.module.scss';

export function HeaderCartIcon({ color }) {
	const store = useSelector((store) => store.cart);
	const history = useHistory();
	const handleClick = (evt) => {
		evt.preventDefault();
		history.push('/account/cart');
	};
	return (
		<a href={'/account/cart'} className={s.cartContainer} onClick={handleClick}>
			<Icon name={'header-cart'} className={s.cartIcon} color={color} />
			{store.totalCount ? <p>{store.totalCount}</p> : ''}
		</a>
	);
}
