import React from 'react';
import { useSelector } from 'react-redux';

import { CartListItem } from './CartListItem';

import s from '../CartPage.module.scss';

export function CartList() {
	const store = useSelector((store) => store.cart);

	return (
		<div className={s.cartList}>
			{store.totalCount ? (
				store.items.map((item) => {
					return <CartListItem key={item.id} item={item} />;
				})
			) : (
				<h3 className={s.noItems}>{'There are no items in a cart'}</h3>
			)}
		</div>
	);
}
