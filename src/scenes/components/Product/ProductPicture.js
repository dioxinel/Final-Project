import React from 'react';
import s from './Product.module.scss';

export function ProductPicture({ item }) {
	return (
		<img src={item.picture} alt={'description'} className={s.productPicture} />
	);
}
