import React from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import s from './Product.module.scss';

export function ProductPicture({ item, className }) {
	return (
		<div className={className}>
			<LazyLoadImage
				src={item.picture}
				alt={'description'}
				className={s.productPicture}
				effect={'blur'}
			/>
		</div>
	);
}
