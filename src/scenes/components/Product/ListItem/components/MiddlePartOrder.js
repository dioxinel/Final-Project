import React from 'react';

import { ProductTitle } from '../../ProductTitle';

import s from '../ListItem.module.scss';

export function MiddlePartOrder({ item }) {
	return (
		<div className={s.middlePart}>
			<ProductTitle title={item.product.title} className={s.productTitle} />
			<div className={s.container}>
				<h3 className={s.items}>Items:</h3>
				<p className={s.quantity}>{item.quantity}</p>
			</div>
		</div>
	);
}
