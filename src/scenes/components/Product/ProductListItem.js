import React from 'react';
import s from './Product.module.scss';
import { ProductPicture } from './ProductPicture';
import { ProductPrice } from './ProductPrice';
import { ProductTitle } from './ProductTitle';

export function ProductListItem({ item }) {
	return (
		<div className={s.productListItem} product-id={item.id}>
			<ProductPicture item={item} className={s.productPicture} />
			<ProductTitle title={item.title} className={s.productTitle} />
			<ProductPrice price={item.price} className={s.productPrice} />
		</div>
	);
}
