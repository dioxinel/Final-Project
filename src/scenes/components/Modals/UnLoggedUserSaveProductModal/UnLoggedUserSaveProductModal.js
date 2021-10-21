import React, { useContext } from 'react';
import Modal from 'react-modal';

import { ModalContent } from './components/ModalContent';
import { CloseModalIcon } from '../../Icons/CloseModalIcon';

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
			<CloseModalIcon
				handleClose={handleBack}
				width={'22'}
				height={'22'}
				className={s.cross}
			/>
			<ModalContent handleClose={handleClose} handleBack={handleBack} />
		</Modal>
	);
}
