import React from 'react';

import s from '../OrdersHistoryPage.module.scss';

export function LeftPartOfItem({ item }) {
	const date = new Date(item.createdAt);

	return (
		<div className={s.leftPartOfItem}>
			<div className={s.container}>
				<h3 className={s.title}>Order ID:</h3>
				<p className={s.orderId} order-id={item.id}>
					{item.id}
				</p>
			</div>
			<div className={s.container}>
				<h3 className={s.title}>Date: </h3>
				<p
					className={s.orderDate}
				>{`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`}</p>
			</div>
		</div>
	);
}
