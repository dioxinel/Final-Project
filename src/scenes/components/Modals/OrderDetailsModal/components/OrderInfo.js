import React from 'react';

import s from '../OrderDetailsModal.module.scss';

export function OrderInfo({ order }) {
	const newDate = new Date(order.createdAt);
	const date = `${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}`;
	const address = `${order.shipment.address}, ${order.shipment.city}, ${order.shipment.country}`;
	let count = 0;
	order.items.forEach((item) => {
		count += item.quantity;
	});

	return (
		<div className={s.orderInfo}>
			<div className={s.infoPart}>
				<div className={s.infoContainer}>
					<div className={s.nameOfValue}>{'Date:'}</div>
					<div className={s.value}>{date}</div>
				</div>
				<div className={s.infoContainer}>
					<div className={s.nameOfValue}>{'Address:'}</div>
					<div className={s.value}>{address}</div>
				</div>
			</div>
			<div className={s.infoPart}>
				<div className={s.infoContainer}>
					<div className={s.nameOfValueRight}>{'Items:'}</div>
					<div className={s.value}>{count}</div>
				</div>
				<div className={s.infoContainer}>
					<div className={s.nameOfValueRight}>{'Total:'}</div>
					<div className={s.value}>{`$ ${order.totalPrice}`}</div>
				</div>
			</div>
		</div>
	);
}
