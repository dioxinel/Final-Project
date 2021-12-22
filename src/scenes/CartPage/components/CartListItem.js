import React from 'react';

import { ListItem } from '../../components/Product/ListItem/ListItem';

export function CartListItem({ item }) {
	return (
		<ListItem>
			<ListItem.ProductPicture item={item} />
			<ListItem.MiddlePart item={item} />
			<ListItem.ItemPrice price={item.price} />
		</ListItem>
	);
}
