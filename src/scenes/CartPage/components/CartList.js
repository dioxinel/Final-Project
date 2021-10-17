import React, { useEffect, useState } from 'react';
import SessionStorageApi from '../../../SessionStorageApi';

import s from '../CartPage.module.scss';
import { CartListItem } from './CartListItem';

export function CartList() {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		setProducts(SessionStorageApi.cart);
	}, []);

	const updateCart = () => {
		setProducts(SessionStorageApi.cart);
	};
	return (
		<div className={s.cartList}>
			{products.map((item) => {
				return <CartListItem key={item.id} item={item} updateCart={updateCart} />;
			})}
		</div>
	);
}
