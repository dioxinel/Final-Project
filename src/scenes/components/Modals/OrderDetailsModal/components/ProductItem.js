import React from 'react';

import { ItemPrice } from '../../../../CartPage/components/ItemPrice';
import { ProductPicture } from '../../../Product/ProductPicture';
import { ProductTitle } from '../../../Product/ProductTitle';

import s from '../OrderDetailsModal.module.scss';

export function ProductItem({ item }) {
	return (
		<li className={s.productItem}>
			<ProductPicture item={item.product} className={s.productPicture} />
			<div className={s.middlePart}>
				<ProductTitle title={item.product.title} className={s.productTitle} />
				<div className={s.container}>
					<h3 className={s.items}>Items:</h3>
					<p className={s.quantity}>{item.quantity}</p>
				</div>
			</div>
			<ItemPrice price={item.product.price} className={s.itemPrice} />
		</li>
	);
}
