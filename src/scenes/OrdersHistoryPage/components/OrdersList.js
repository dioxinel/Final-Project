import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';

import { OrderItem } from './OrderItem';

import s from '../OrdersHistoryPage.module.scss';
import api from '../../../api';
import { OrderDetailsModal } from '../../components/Modals/OrderDetailsModal/OrderDetailsModal';
import { getItemById } from '../../../utils';

export function OrdersList() {
	const [activeOrder, setActiveOrder] = useState(false);
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

	const handleClickOnOrder = (evt) => {
		const product = evt.target.closest('div[order-id]');
		if (!product) return;
		const productId = product.getAttribute('order-id');
		setActiveOrder(getItemById(orders, productId));
	};

	return (
		<>
			<div className={s.ordersList} onClick={handleClickOnOrder}>
				{isLoading ? (
					<ClipLoader color='#FD7114' loading={isLoading} size={60} />
				) : (
					orders.map((item) => {
						return <OrderItem key={item.id} item={item} />;
					})
				)}
			</div>

			{activeOrder ? (
				<OrderDetailsModal order={activeOrder} setActiveOrder={setActiveOrder} />
			) : (
				''
			)}
		</>
	);
}
