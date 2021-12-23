import React from 'react';

import s from '../ListItem.module.scss';

export function ItemPrice({ price, className = s.itemPrice }) {
	return (
		<div className={className}>
			<h3>Price:</h3>
			<p>{`$${price}`}</p>
		</div>
	);
}
