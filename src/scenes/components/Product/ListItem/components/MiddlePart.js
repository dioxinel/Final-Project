import React from 'react';
import { useDispatch } from 'react-redux';

import { NumOfProduct } from '../../NumOfProduct';
import { TrashCanIcon } from '../../../../CartPage/components/TrashCanIcon';

import s from '../ListItem.module.scss';

import { setCartItemCount } from '../../../../../store/actions';
import { ProductTitle } from '../../ProductTitle';

export function MiddlePart({ item }) {
	const dispatch = useDispatch();

	const handleChangeItemCount = (count) => {
		dispatch(setCartItemCount({ id: item.id, count }));
	};

	return (
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
	);
}
