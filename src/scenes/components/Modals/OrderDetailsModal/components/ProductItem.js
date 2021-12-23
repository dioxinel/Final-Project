import React from 'react';
import { ListItem } from '../../../Product/ListItem/ListItem';

export function ProductItem({ item }) {
	return (
		<ListItem>
			<ListItem.ProductPicture item={item.product} />
			<ListItem.MiddlePartOrder item={item} />
			<ListItem.ItemPrice price={item.product.price} />
		</ListItem>
	);
}
