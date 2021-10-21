import React from 'react';
import Modal from 'react-modal';
import { useHistory } from 'react-router';
import { CloseModalIcon } from '../../Icons/CloseModalIcon';

import { ModalContent } from './components/ModalContent';

import s from './SuccessOrderModal.module.scss';

export function SuccessOrderModal({ isOpen, setIsOpen }) {
	const history = useHistory();

	const handleClose = () => {
		history.push('/');
		setIsOpen(false);
	};

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={handleClose}
			className={s.successOrderModal}
			overlayClassName={s.modalOverlay}
		>
			<CloseModalIcon
				handleClose={handleClose}
				width={'18'}
				height={'18'}
				className={s.cross}
			/>
			<ModalContent handleClose={handleClose} />
		</Modal>
	);
}
