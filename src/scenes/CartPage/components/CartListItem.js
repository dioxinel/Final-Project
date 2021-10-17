import React from 'react';
import SessionStorageApi from '../../../SessionStorageApi';
import { NumOfProduct } from '../../components/Modals/ProductModal/components/NumOfProduct';
import { ProductPicture } from '../../components/Product/ProductPicture';
import { ProductTitle } from '../../components/Product/ProductTitle';
import { ItemPrice } from './ItemPrice';
import { TrashCanIcon } from './TrashCanIcon';

import s from '../CartPage.module.scss';

export function CartListItem({ item, updateCart }) {
	const handleChangeItemCount = (count) => {
		SessionStorageApi.setItemCount(item.id, count);
		updateCart();
	};

	return (
		<div className={s.cartListItem}>
			<ProductPicture item={item} className={s.cartProductPicture} />
			<div className={s.middlePart}>
				<ProductTitle title={item.title} className={s.productTitle} />
				<div>
					<TrashCanIcon id={item.id} updateCart={updateCart} />
					<NumOfProduct
						num={item.count}
						setNum={handleChangeItemCount}
						className={s.numOfProduct}
					/>
				</div>
			</div>
			<ItemPrice price={item.price} />
		</div>
	);
}
