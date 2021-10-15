import React from 'react';

import s from './Product.module.scss';

export function ProductPrice({ price, className = s.productPrice }) {
	return <div className={className}>{`$${price}`}</div>;
}
