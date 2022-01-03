import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';

import { CloseModalIcon } from '../../Icons/CloseModalIcon';

import s from './ProductModal.module.scss';
import { getItemById } from '../../../../utils/utils';
import { ProductModalContent } from './components/ProductModalContent';

export function ProductModal({ clickedProductId, setClickedProductId }) {
	const store = useSelector((store) => store.products);
	const location = useLocation();

	const [product, setProduct] = useState(null);

	useEffect(() => {
		let productList;
		if (location.pathname === '/account/favorites') {
			productList = store.favorites;
		} else {
			productList = store.products;
		}
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
			<CloseModalIcon
				handleClose={handleClose}
				width={'25'}
				height={'25'}
				className={s.cross}
			/>
			{product ? <ProductModalContent item={product} /> : ''}
		</Modal>
	);
}
