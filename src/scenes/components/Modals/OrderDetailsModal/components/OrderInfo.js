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
					<h3 className={s.nameOfValue}>{'Date:'}</h3>
					<p className={s.value}>{date}</p>
				</div>
				<div className={s.infoContainer}>
					<h3 className={s.nameOfValue}>{'Address:'}</h3>
					<p className={s.value}>{address}</p>
				</div>
			</div>
			<div className={s.infoPart}>
				<div className={s.infoContainer}>
					<h3 className={s.nameOfValueRight}>{'Items:'}</h3>
					<p className={s.value}>{count}</p>
				</div>
				<div className={s.infoContainer}>
					<h3 className={s.nameOfValueRight}>{'Total:'}</h3>
					<p className={s.value}>{`$ ${order.totalPrice}`}</p>
				</div>
			</div>
		</div>
	);
}
