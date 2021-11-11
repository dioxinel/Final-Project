import React from 'react';

import { SaveProductBtn } from './SaveProductBtn';
import { ProductPicture } from './ProductPicture';
import { ProductPrice } from './ProductPrice';
import { ProductTitle } from './ProductTitle';

import s from './Product.module.scss';

export function ProductListItem({ item }) {
	return (
		<li className={s.productListItem} product-id={item.id}>
			<ProductPicture item={item} className={s.productPicture} />
			<SaveProductBtn isSaved={item.favorite} />
			<ProductTitle title={item.title} className={s.productTitle} />
			<ProductPrice price={item.price} className={s.productPrice} />
		</li>
	);
}
