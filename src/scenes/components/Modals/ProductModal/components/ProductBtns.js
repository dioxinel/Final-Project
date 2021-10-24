import React from 'react';

import { BuyNowBtn } from './BuyNowBtn';
import { SaveBtn } from './SaveBtn';
import { AddToCartBtn } from './AddToCartBtn';

import s from '../ProductModal.module.scss';

export function ProductBtns({ product }) {
	return (
		<div className={s.productBtns}>
			<AddToCartBtn product={product} />
			<SaveBtn product={product} />
			<BuyNowBtn product={product} />
		</div>
	);
}
