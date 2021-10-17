import React, { useContext } from 'react';
import Modal from 'react-modal';

import { CloseModalIcon } from './components/CloseModalIcon';
import { ModalContent } from './components/ModalContent';

import s from './UnLoggedUserSaveProductModal.module.scss';

import { UnLoggedModalContext } from '../../Product/ProductList';

export function UnLoggedUserSaveProductModal({ isOpen, setIsOpen }) {
	const { setClickedProductId } = useContext(UnLoggedModalContext);

	const handleClose = () => {
		setIsOpen(false);
	};

	const handleBack = () => {
		if (typeof isOpen === 'number') setClickedProductId(isOpen); // To open popup with product
		setIsOpen(false);
	};

	return (
		<Modal
			isOpen={!!isOpen}
			onRequestClose={handleClose}
			className={s.saveProductModal}
			overlayClassName={s.modalOverlay}
		>
			<CloseModalIcon handleClose={handleBack} />
			<ModalContent handleClose={handleClose} handleBack={handleBack} />
		</Modal>
	);
}
