import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	addProductToFavorites,
	removeProductFromFavorites,
} from '../../../store/actions';
import { ProductModal } from '../Modals/ProductModal/ProductModal';
import { ProductListItem } from './ProductListItem';

import s from './Product.module.scss';
import api from '../../../api';
import { getItemById } from '../../../utils';
import { UnLoggedUserSaveProductModal } from '../Modals/UnLoggedUserSaveProductModal/UnLoggedUserSaveProductModal';

export function ProductList({ items }) {
	const store = useSelector((store) => store.viewer);

	const dispatch = useDispatch();

	const [clickedProductId, setClickedProductId] = useState('');
	const [isOpen, setIsOpen] = useState(false);

	const handleClickOnProduct = async (evt) => {
		const product = evt.target.closest('div[product-id]');
		if (!product) return;
		const productId = product.getAttribute('product-id');

		const svg = evt.target.closest('svg');
		if (svg || evt.target.tagName === 'P') {
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
			setIsOpen(true);
			return;
		}
		setClickedProductId(productId);
	};

	return (
		<>
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
		</>
	);
}
