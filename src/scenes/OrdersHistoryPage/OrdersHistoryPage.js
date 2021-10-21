import React from 'react';

import { AccountMenu } from '../components/AccountMenu/AccountMenu';
import { OrdersList } from './components/OrdersList';

import s from './OrdersHistoryPage.module.scss';

export function OrdersHistoryPage() {
	return (
		<div className={s.ordersHistoryPageContainer}>
			<div className={s.ordersHistoryPage}>
				<AccountMenu />
				<OrdersList />
			</div>
		</div>
	);
}
