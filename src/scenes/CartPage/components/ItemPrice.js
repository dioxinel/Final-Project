import React from 'react';

import s from '../CartPage.module.scss';

export function ItemPrice({ price }) {
	return (
		<div className={s.itemPrice}>
			Price:
			<div>{`$${price}`}</div>
		</div>
	);
}
