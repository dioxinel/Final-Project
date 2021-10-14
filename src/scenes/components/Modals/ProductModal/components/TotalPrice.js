import React from 'react';

import s from '../ProductModal.module.scss';

export function TotalPrice({ price, numOfItem }) {
	return (
		<div className={s.totalPrice}>
			<div className={s.totalPriceContainer}>
				<div className={s.title}>Items:</div>
				<div className={s.totalPriceValue}>{numOfItem}</div>
			</div>
			<div className={s.totalPriceContainer}>
				<div className={s.title}>Total:</div>
				<div className={s.totalPriceValue}>$ {price * numOfItem}</div>
			</div>
		</div>
	);
}
