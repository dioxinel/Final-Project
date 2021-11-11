import React from 'react';

import s from './Product.module.scss';

export function ProductTitle({ title, className = s.productTitle }) {
	return <h3 className={className}>{title}</h3>;
}
