import React from 'react';

import { LeftPartOfItem } from './LeftPartOfItem';
import { RightPartOfItem } from './RightPartOfItem';

import s from '../OrdersHistoryPage.module.scss';

export function OrderItem({ item }) {
	return (
		<div className={s.orderItem}>
			<LeftPartOfItem item={item} />
			<RightPartOfItem item={item} />
		</div>
	);
}
