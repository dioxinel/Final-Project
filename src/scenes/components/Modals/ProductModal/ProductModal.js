import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';

import { CloseModalIcon } from './components/CloseModalIcon';
import { ProductModalContent } from './components/ProductModalContent';

import s from './ProductModal.module.scss';
import { getItemById } from '../../../../utils';

export function ProductModal({ clickedProductId, setClickedProductId }) {
	const store = useSelector((store) => store.products);
	const [product, setProduct] = useState(null);

	useEffect(() => {
		setProduct(getItemById(store.products, Number(clickedProductId)));
	}, [clickedProductId, store.products]);

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
