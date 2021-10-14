import React, { useState } from 'react';

import s from '../ProductModal.module.scss';
import { NumOfProduct } from './NumOfProduct';
import { TotalPrice } from './TotalPrice';

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
