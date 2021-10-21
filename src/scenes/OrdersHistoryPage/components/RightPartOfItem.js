import React from 'react';

import s from '../OrdersHistoryPage.module.scss';

export function RightPartOfItem({ item }) {
	return (
		<div className={s.rightPartOfItem}>
			<div className={s.container}>
				<div className={s.priceTitle}>Price</div>
				<div className={s.orderDate}>{`$ ${item.totalPrice}`}</div>
			</div>
		</div>
	);
}
