import React from 'react';
import { useDispatch } from 'react-redux';

import { NumOfProduct } from '../../components/Modals/ProductModal/components/NumOfProduct';
import { ProductPicture } from '../../components/Product/ProductPicture';
import { ProductTitle } from '../../components/Product/ProductTitle';
import { ItemPrice } from './ItemPrice';
import { TrashCanIcon } from './TrashCanIcon';

import s from '../CartPage.module.scss';
import { setCartItemCount } from '../../../store/actions';

export function CartListItem({ item }) {
	const dispatch = useDispatch();

	const handleChangeItemCount = (count) => {
		dispatch(setCartItemCount({ id: item.id, count }));
	};

	return (
		<div className={s.cartListItem}>
			<ProductPicture item={item} className={s.cartProductPicture} />
			<div className={s.middlePart}>
				<ProductTitle title={item.title} className={s.productTitle} />
				<div>
					<TrashCanIcon id={item.id} />
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
