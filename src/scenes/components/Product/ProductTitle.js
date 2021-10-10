import React from 'react';
import s from './Product.module.scss';

export function ProductTitle({ title, className = s.productTitle }) {
	return <div className={className}>{title}</div>;
}
