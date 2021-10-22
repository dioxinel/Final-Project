import React from 'react';

import s from '../OrdersHistoryPage.module.scss';

export function LeftPartOfItem({ item }) {
	const date = new Date(item.createdAt);

	return (
		<div className={s.leftPartOfItem}>
			<div className={s.container}>
				<div className={s.title}>Order ID:</div>
				<div className={s.orderId} order-id={item.id}>
					{item.id}
				</div>
			</div>
			<div className={s.container}>
				<div className={s.title}>Date: </div>
				<div
					className={s.orderDate}
				>{`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`}</div>
			</div>
		</div>
	);
}
