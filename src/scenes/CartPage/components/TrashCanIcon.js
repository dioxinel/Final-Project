import React from 'react';
import { useDispatch } from 'react-redux';

import Icon from '../../components/Icon';

import s from '../CartPage.module.scss';
import { removeItemFromCart } from '../../../store/actions';

export function TrashCanIcon({ id }) {
	const dispatch = useDispatch();

	const handleRemoveFromCart = () => {
		dispatch(removeItemFromCart(id));
	};

	return (
		<Icon
			name={'trash-can'}
			onClick={handleRemoveFromCart}
			className={s.trashCan}
		/>
	);
}
