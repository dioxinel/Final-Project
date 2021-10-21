import React from 'react';

import { ItemPrice } from '../../../../CartPage/components/ItemPrice';
import { ProductPicture } from '../../../Product/ProductPicture';
import { ProductTitle } from '../../../Product/ProductTitle';

import s from '../OrderDetailsModal.module.scss';

export function ProductItem({ item }) {
	return (
		<div className={s.productItem}>
			<ProductPicture item={item.product} className={s.productPicture} />
			<div className={s.middlePart}>
				<ProductTitle title={item.product.title} className={s.productTitle} />
				<div className={s.container}>
					<div className={s.items}>Items:</div>
					<div className={s.quantity}>{item.quantity}</div>
				</div>
			</div>
			<ItemPrice price={item.product.price} className={s.itemPrice} />
		</div>
	);
}
