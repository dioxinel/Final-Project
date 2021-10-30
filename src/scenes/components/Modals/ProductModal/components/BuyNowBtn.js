import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { Button1 } from '../../../Buttons/Button1';

import s from '../ProductModal.module.scss';

import { UnLoggedModalContext } from '../../../Product/ProductList';
import {
	addItemToCart,
	setCartItemCount,
	setPostAuthAction,
} from '../../../../../store/actions';
import { BuyNowContext } from './ProductModalContent';
import { getItemById } from '../../../../../utils';

export function BuyNowBtn({ product }) {
	const history = useHistory();
	const dispatch = useDispatch();
	const { num } = useContext(BuyNowContext);
	const { setIsOpen, setClickedProductId } = useContext(UnLoggedModalContext);

	const store = useSelector((store) => store.viewer);
	const cart = useSelector((store) => store.cart);

	const handleBuyNow = async (productId) => {
		if (!store.isLoggedIn) {
			setClickedProductId('');
			setIsOpen(productId);
			dispatch(
				setPostAuthAction({
					action: 'buyNow',
					props: { product: product, count: num },
				}),
			);
			return;
		}

		const cartItem = getItemById(cart.items, productId);

		if (cartItem) {
			dispatch(setCartItemCount({ id: productId, count: cartItem.count + num }));
		} else {
			dispatch(addItemToCart(product));
			dispatch(setCartItemCount({ id: productId, count: num }));
		}
		history.push('/account/cart');
		setClickedProductId('');
	};

	return (
		<Button1
			text={'Buy now'}
			handleClick={() => handleBuyNow(product.id)}
			className={s.buyNow}
		/>
	);
}
