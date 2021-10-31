import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	addProductToFavorites,
	removeProductFromFavorites,
	setPostAuthAction,
} from '../../../store/actions';
import { ProductModal } from '../Modals/ProductModal/ProductModal';
import { ProductListItem } from './ProductListItem';

import { UnLoggedUserSaveProductModal } from '../Modals/UnLoggedUserSaveProductModal/UnLoggedUserSaveProductModal';

import s from './Product.module.scss';

import api from '../../../api';
import { getItemById } from '../../../utils';

export const UnLoggedModalContext = React.createContext(false);
const UnLoggedModalContextProvider = UnLoggedModalContext.Provider;

export function ProductList({ items }) {
	const store = useSelector((store) => store.viewer);

	const dispatch = useDispatch();

	const [clickedProductId, setClickedProductId] = useState('');
	const [isOpen, setIsOpen] = useState(false);

	const handleSaveProduct = async (productId) => {
		if (store.isLoggedIn) {
			if (getItemById(items, productId).favorite) {
				dispatch(removeProductFromFavorites(productId));
				await api.removeFromFavorites(productId);
				return;
			}
			dispatch(addProductToFavorites(productId));
			await api.addToFavorites(productId);
			return;
		}
		dispatch(
			setPostAuthAction({
				action: 'addToFavorite',
				props: { id: productId },
			}),
		);
		setIsOpen(true);
	};

	const handleClickOnProduct = (evt) => {
		const product = evt.target.closest('div[product-id]');
		if (!product) return;
		const productId = product.getAttribute('product-id');

		const svg = evt.target.closest('svg');
		if (svg || evt.target.tagName === 'P') {
			handleSaveProduct(productId);
			return;
		}

		setClickedProductId(productId);
	};

	return (
		<UnLoggedModalContextProvider value={{ setIsOpen, setClickedProductId }}>
			<div className={s.productList} onClick={handleClickOnProduct}>
				{items.map((item) => {
					return <ProductListItem key={item.id} item={item} />;
				})}
			</div>
			<ProductModal
				clickedProductId={clickedProductId}
				setClickedProductId={setClickedProductId}
			/>
			<UnLoggedUserSaveProductModal isOpen={isOpen} setIsOpen={setIsOpen} />
		</UnLoggedModalContextProvider>
	);
}
