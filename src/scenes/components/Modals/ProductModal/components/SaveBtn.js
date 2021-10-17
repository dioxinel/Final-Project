import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Icon from '../../../Icon';

import s from '../ProductModal.module.scss';

import api from '../../../../../api';
import {
	addProductToFavorites,
	removeProductFromFavorites,
} from '../../../../../store/actions';
import { UnLoggedModalContext } from '../../../Product/ProductList';

export function SaveBtn({ product }) {
	const { setIsOpen, setClickedProductId } = useContext(UnLoggedModalContext);
	const store = useSelector((store) => store.viewer);
	const dispatch = useDispatch();

	const handleSaveProduct = async (productId) => {
		if (store.isLoggedIn) {
			if (product.favorite) {
				dispatch(removeProductFromFavorites(productId));
				await api.removeFromFavorites(productId);
				return;
			}
			dispatch(addProductToFavorites(productId));
			await api.addToFavorites(productId);
			return;
		}
		setClickedProductId('');
		setIsOpen(productId);
	};

	return (
		<button
			onClick={() => handleSaveProduct(product.id)}
			className={`${s.addProductBtn} ${
				product.favorite ? s.removeFromFavorites : s.addToFavorites
			}`}
		>
			{product.favorite ? (
				<>
					Added to favorites{' '}
					<Icon name={'add-to-favorites-tick'} className={s.tick} />
				</>
			) : (
				'Add to favorites'
			)}
		</button>
	);
}
