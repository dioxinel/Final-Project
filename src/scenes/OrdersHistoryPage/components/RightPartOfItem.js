import React from 'react';

import s from '../OrdersHistoryPage.module.scss';

export function RightPartOfItem({ item }) {
	return (
		<div className={s.rightPartOfItem}>
			<div className={s.container}>
				<h3 className={s.priceTitle}>Price</h3>
				<p className={s.orderDate}>{`$ ${item.totalPrice}`}</p>
			</div>
		</div>
	);
}
