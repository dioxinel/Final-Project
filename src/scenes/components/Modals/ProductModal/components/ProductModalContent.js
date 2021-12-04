import React, { useState } from 'react';

import { ProductBtns } from './ProductBtns';
import { TextInfo } from './TextInfo';
import { ProductPicture } from '../../../Product/ProductPicture';

import s from '../ProductModal.module.scss';

export const BuyNowContext = React.createContext(false);
const BuyNowContextProvider = BuyNowContext.Provider;

export function ProductModalContent({ item, handleClose }) {
	const [num, setNum] = useState(1);

	return (
		<BuyNowContextProvider value={{ num, setNum }}>
			<div className={s.productModalContent}>
				<div className={s.pictureContainer}>
					<ProductPicture item={item} className={s.picture} />
				</div>
				<TextInfo item={item} />
				<ProductBtns product={item} handleClose={handleClose} />
			</div>
		</BuyNowContextProvider>
	);
}
