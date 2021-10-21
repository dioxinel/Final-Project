import React from 'react';

import { OrderDetailsProductList } from './OrderDetailsProductList';
import { OrderTitle } from './OrderTitle';
import { OrderInfo } from './OrderInfo';

import s from '../OrderDetailsModal.module.scss';

export function ModalContent({ order }) {
	return (
		<div className={s.modalContent}>
			<OrderTitle id={order.id} />
			<OrderDetailsProductList order={order} />
			<OrderInfo order={order} />
		</div>
	);
}
