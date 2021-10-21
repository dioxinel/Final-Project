import React from 'react';

import s from '../CartPage.module.scss';

export function ItemPrice({ price, className = s.itemPrice }) {
	return (
		<div className={className}>
			Price:
			<div>{`$${price}`}</div>
		</div>
	);
}
