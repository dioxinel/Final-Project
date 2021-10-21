import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';

import { OrderItem } from './OrderItem';

import s from '../OrdersHistoryPage.module.scss';
import api from '../../../api';

export function OrdersList() {
	const [isLoading, setIsLoading] = useState(true);
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		async function fetch() {
			try {
				const res = await api.getOrders();
				setOrders(res.data);
			} catch (err) {
				console.log(err);
			} finally {
				setIsLoading(false);
			}
		}
		fetch();
	}, []);

	return (
		<div className={s.ordersList}>
			{isLoading ? (
				<ClipLoader color='#FD7114' loading={isLoading} size={60} />
			) : (
				orders.map((item) => {
					return <OrderItem key={item.id} item={item} />;
				})
			)}
		</div>
	);
}
