import React from 'react';

import { Button1 } from '../../../Buttons/Button1';
import { SaveBtn } from './SaveBtn';
import { AddToCartBtn } from './AddToCartBtn';

import s from '../ProductModal.module.scss';

export function ProductBtns({ product }) {
	return (
		<div className={s.productBtns}>
			<AddToCartBtn product={product} />
			<SaveBtn product={product} />
			<Button1
				text={'Buy now'}
				handleClick={() => {
					console.log('In work');
				}}
				className={s.buyNow}
			/>
		</div>
	);
}
