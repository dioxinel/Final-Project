import React from 'react';
import s from './Product.module.scss';
import { ProductListItem } from './ProductListItem';

export function ProductList({ items }) {
	return (
		<div className={s.productList}>
			{items.map((item) => {
				return <ProductListItem key={item.id} item={item} />;
			})}
		</div>
	);
}
