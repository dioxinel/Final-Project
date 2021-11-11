import React from 'react';

import { ProductItem } from './ProductItem';

import s from '../OrderDetailsModal.module.scss';

export function OrderDetailsProductList({ order }) {
	return (
		<ul className={s.orderDetailsProductList}>
			{order.items.map((item) => {
				return <ProductItem key={item.product.id} item={item} />;
			})}
		</ul>
	);
}
