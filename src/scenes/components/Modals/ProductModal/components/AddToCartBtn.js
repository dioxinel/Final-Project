import React, { useContext } from 'react';
import { useSelector } from 'react-redux';

import s from '../ProductModal.module.scss';

import { UnLoggedModalContext } from '../../../Product/ProductList';
import SessionStorageApi from '../../../../../SessionStorageApi';

export function AddToCartBtn({ product }) {
	const { setIsOpen, setClickedProductId } = useContext(UnLoggedModalContext);
	const store = useSelector((store) => store.viewer);

	const handleAddToCart = async (productId) => {
		if (!store.isLoggedIn) {
			setClickedProductId('');
			setIsOpen(productId);
			return;
		}
		SessionStorageApi.addItem(product);
		setClickedProductId('');
	};

	return (
		<button
			onClick={() => handleAddToCart(product.id)}
			className={`${s.addProductBtn} ${s.addToCart}`}
		>
			{'Add to cart'}
		</button>
	);
}
