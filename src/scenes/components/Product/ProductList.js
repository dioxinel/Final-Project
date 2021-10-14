import React, { useState } from 'react';
import { ProductModal } from '../Modals/ProductModal/ProductModal';
import s from './Product.module.scss';
import { ProductListItem } from './ProductListItem';

export function ProductList({ items }) {
	const [clickedProductId, setClickedProductId] = useState('');

	const handleClickOnProduct = (evt) => {
		const node = evt.target.closest('svg');
		if (node) return;
		if (!evt.target.getAttribute('product-id')) {
			setClickedProductId(evt.target.parentNode.getAttribute('product-id'));
			return;
		} else if (evt.target.getAttribute('product-id')) {
			setClickedProductId(evt.target.getAttribute('product-id'));
		}
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
		</>
	);
}
