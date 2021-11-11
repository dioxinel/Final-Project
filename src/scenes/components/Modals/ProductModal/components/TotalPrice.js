import React from 'react';

import s from '../ProductModal.module.scss';

export function TotalPrice({ price, numOfItem }) {
	return (
		<div className={s.totalPrice}>
			<div className={s.totalPriceContainer}>
				<h3 className={s.title}>Items:</h3>
				<p className={s.totalPriceValue}>{numOfItem}</p>
			</div>
			<div className={s.totalPriceContainer}>
				<h3 className={s.title}>Total:</h3>
				<p className={s.totalPriceValue}>$ {price * numOfItem}</p>
			</div>
		</div>
	);
}
