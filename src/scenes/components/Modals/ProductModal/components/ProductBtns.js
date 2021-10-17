import React from 'react';

import { AddProductBtn } from './AddProductBtn';
import { SaveBtn } from './SaveBtn';

import s from '../ProductModal.module.scss';

export function ProductBtns({ product }) {
	return (
		<div className={s.productBtns}>
			<AddProductBtn text={'Add to cart'} className={s.addToCart} />
			<SaveBtn product={product} />
			<AddProductBtn text={'Buy now'} className={s.buyNow} />
		</div>
	);
}
