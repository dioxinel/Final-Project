import React from 'react';

import { ProductOrder } from './ProductOrder';
import { ProductDescription } from '../../../Product/ProductDescription';
import { ProductTitle } from '../../../Product/ProductTitle';

import s from '../ProductModal.module.scss';

export function TextInfo({ item }) {
	return (
		<div>
			<div className={s.textInfo}>
				<ProductTitle title={item.title} className={s.title} />
				<ProductDescription text={item.description} className={s.description} />
			</div>
			<ProductOrder item={item} />
		</div>
	);
}
