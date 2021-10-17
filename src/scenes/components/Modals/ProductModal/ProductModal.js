import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';

import { CloseModalIcon } from './components/CloseModalIcon';
import { ProductModalContent } from './components/ProductModalContent';

import s from './ProductModal.module.scss';
import { getItemById } from '../../../../utils';
import { useLocation } from 'react-router';

export function ProductModal({ clickedProductId, setClickedProductId }) {
	const store = useSelector((store) => store.products);
	const location = useLocation();

	const [product, setProduct] = useState(null);

	useEffect(() => {
		const productList =
			location.pathname === '/account/favorites'
				? store.favorites
				: store.products;
		setProduct(getItemById(productList, Number(clickedProductId)));
	}, [clickedProductId, store, location]);

	const handleClose = () => {
		setClickedProductId('');
	};

	return (
		<Modal
			isOpen={!!clickedProductId}
			onRequestClose={handleClose}
			className={s.productModal}
			overlayClassName={s.modalOverlay}
		>
			<CloseModalIcon handleClose={handleClose} />
			{product ? <ProductModalContent item={product} /> : ''}
		</Modal>
	);
}
