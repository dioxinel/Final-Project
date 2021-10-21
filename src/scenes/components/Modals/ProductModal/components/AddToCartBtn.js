import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button2 } from '../../../Buttons/Button2';

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
		<Button2
			text={'Add to cart'}
			handleClick={() => handleAddToCart(product.id)}
			className={`${s.addToCart}`}
		/>
	);
}
