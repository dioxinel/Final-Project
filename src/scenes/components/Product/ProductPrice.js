import React from 'react';

import s from './Product.module.scss';

export function ProductPrice({ price, className = s.productPrice }) {
	return <p className={className}>{`$${price}`}</p>;
}
