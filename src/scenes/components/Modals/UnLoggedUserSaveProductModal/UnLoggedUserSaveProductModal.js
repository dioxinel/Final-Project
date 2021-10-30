import React, { useContext } from 'react';
import Modal from 'react-modal';

import { ModalContent } from './components/ModalContent';
import { CloseModalIcon } from '../../Icons/CloseModalIcon';

import s from './UnLoggedUserSaveProductModal.module.scss';

import { UnLoggedModalContext } from '../../Product/ProductList';
import { useDispatch } from 'react-redux';
import { setPostAuthAction } from '../../../../store/actions';

export function UnLoggedUserSaveProductModal({ isOpen, setIsOpen }) {
	const { setClickedProductId } = useContext(UnLoggedModalContext);
	const dispatch = useDispatch();

	const handleClose = () => {
		setIsOpen(false);
	};

	const handleBack = () => {
		dispatch(setPostAuthAction(''));
		if (typeof isOpen === 'number') setClickedProductId(isOpen); // To open popup with product
		setIsOpen(false);
	};

	return (
		<Modal
			isOpen={!!isOpen}
			onRequestClose={handleBack}
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
