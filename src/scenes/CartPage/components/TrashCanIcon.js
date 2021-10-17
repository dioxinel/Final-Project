import React from 'react';
import SessionStorageApi from '../../../SessionStorageApi';
import Icon from '../../components/Icon';

import s from '../CartPage.module.scss';

export function TrashCanIcon({ updateCart, id }) {
	const handleRemoveFromCart = () => {
		SessionStorageApi.removeItem(id);
		updateCart();
	};

	return (
		<Icon
			name={'trash-can'}
			onClick={handleRemoveFromCart}
			className={s.trashCan}
		/>
	);
}
