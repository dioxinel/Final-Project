import React, { useContext } from 'react';

import { NumOfProduct } from './NumOfProduct';
import { TotalPrice } from './TotalPrice';

import s from '../ProductModal.module.scss';
import { BuyNowContext } from './ProductModalContent';

export function ProductOrder({ item }) {
	const { num, setNum } = useContext(BuyNowContext);

	return (
		<div className={s.productOrder}>
			<div className={s.priceContainer}>
				<h3 className={s.priceTitle}>Price</h3>
				<p className={s.price}>${item.price}</p>
			</div>
			<NumOfProduct num={num} setNum={setNum} />
			<TotalPrice price={item.price} numOfItem={num} />
		</div>
	);
}
