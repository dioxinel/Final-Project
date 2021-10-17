import React from 'react';

import s from './CartPage.module.scss';
import { CartList } from './components/CartList';

export function CartPage() {
	return (
		<div className={s.cartPageContainer}>
			<div className={s.cartPage}>
				<div className={s.myCart}>My cart</div>
				<CartList />
			</div>
		</div>
	);
}
