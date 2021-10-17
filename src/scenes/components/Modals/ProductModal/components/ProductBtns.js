import React from 'react';

import { AddProductBtn } from './AddProductBtn';
import { SaveBtn } from './SaveBtn';

import s from '../ProductModal.module.scss';
import { AddToCartBtn } from './AddToCartBtn';

export function ProductBtns({ product }) {
	return (
		<div className={s.productBtns}>
			<AddToCartBtn product={product} />
			<SaveBtn product={product} />
			<AddProductBtn text={'Buy now'} className={s.buyNow} />
		</div>
	);
}
