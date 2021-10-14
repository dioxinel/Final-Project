import React from 'react';

import { ProductBtns } from './ProductBtns';
import { TextInfo } from './TextInfo';
import { ProductPicture } from '../../../Product/ProductPicture';

import s from '../ProductModal.module.scss';

export function ProductModalContent({ item }) {
	return (
		<>
			<div className={s.productModalContent}>
				<div className={s.pictureContainer}>
					<ProductPicture item={item} className={s.picture} />
				</div>
				<TextInfo item={item} />
			</div>
			<ProductBtns />
		</>
	);
}
