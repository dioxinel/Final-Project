import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import s from '../ProductModal.module.scss';

import { UnLoggedModalContext } from '../../../Product/ProductList';
import { addItemToCart } from '../../../../../store/actions';

export function AddToCartBtn({ product }) {
	const dispatch = useDispatch();
	const { setIsOpen, setClickedProductId } = useContext(UnLoggedModalContext);
	const store = useSelector((store) => store.viewer);

	const handleAddToCart = async (productId) => {
		if (!store.isLoggedIn) {
			setClickedProductId('');
			setIsOpen(productId);
			return;
		}
		dispatch(addItemToCart(product));
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
