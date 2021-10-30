import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button2 } from '../../../Buttons/Button2';

import s from '../ProductModal.module.scss';

import { UnLoggedModalContext } from '../../../Product/ProductList';
import { addItemToCart, setPostAuthAction } from '../../../../../store/actions';
import { NotificationsContext } from '../../../../../App';

export function AddToCartBtn({ product }) {
	const dispatch = useDispatch();
	const { setIsOpen, setClickedProductId } = useContext(UnLoggedModalContext);
	const { notifications, setNotifications } = useContext(NotificationsContext);
	const store = useSelector((store) => store.viewer);

	const handleAddToCart = async (productId) => {
		if (!store.isLoggedIn) {
			setClickedProductId(''); // close single-product popup
			setIsOpen(productId); // open unLogged popup
			dispatch(setPostAuthAction({ action: 'addToCart', props: product }));
			return;
		}
		setNotifications([
			...notifications,
			{
				text: `The ${product.title} is successfully added to cart`,
				type: 'alert',
			},
		]);
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
