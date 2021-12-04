import React from 'react';

import { BuyNowBtn } from './BuyNowBtn';
import { SaveBtn } from './SaveBtn';
import { AddToCartBtn } from './AddToCartBtn';

import s from '../ProductModal.module.scss';

export function ProductBtns({ product, handleClose }) {
	return (
		<div className={s.productBtns}>
			<AddToCartBtn product={product} />
			<SaveBtn product={product} handleClose={handleClose} />
			<BuyNowBtn product={product} />
		</div>
	);
}
