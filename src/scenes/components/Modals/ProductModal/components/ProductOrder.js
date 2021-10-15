import React, { useState } from 'react';

import { NumOfProduct } from './NumOfProduct';
import { TotalPrice } from './TotalPrice';

import s from '../ProductModal.module.scss';

export function ProductOrder({ item }) {
	const [num, setNum] = useState(1);

	return (
		<div className={s.productOrder}>
			<div className={s.priceContainer}>
				<div className={s.priceTitle}>Price</div>
				<div className={s.price}>${item.price}</div>
			</div>
			<NumOfProduct num={num} setNum={setNum} />
			<TotalPrice price={item.price} numOfItem={num} />
		</div>
	);
}
