import React from 'react';

import { AddProductBtn } from './AddProductBtn';

import s from '../ProductModal.module.scss';

export function ProductBtns() {
	return (
		<div className={s.productBtns}>
			<AddProductBtn text={'Add to cart'} className={s.addToCart} />
			<AddProductBtn
				text={'Add to favorites'}
				className={`${s.addToCart} ${s.addToFavorites}`}
			/>
			<AddProductBtn text={'Buy now'} className={s.buyNow} />
		</div>
	);
}
