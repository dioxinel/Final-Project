import React from 'react';
import Modal from 'react-modal';

import { CloseModalIcon } from './components/CloseModalIcon';
import { ModalContent } from './components/ModalContent';

import s from './UnLoggedUserSaveProductModal.module.scss';

export function UnLoggedUserSaveProductModal({ isOpen, setIsOpen }) {
	const handleClose = () => {
		setIsOpen(false);
	};

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={handleClose}
			className={s.saveProductModal}
			overlayClassName={s.modalOverlay}
		>
			<CloseModalIcon handleClose={handleClose} />
			<ModalContent handleClose={handleClose} />
		</Modal>
	);
}
