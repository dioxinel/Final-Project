import React from 'react';
import Modal from 'react-modal';

import { CloseModalIcon } from '../../Icons/CloseModalIcon';
import { ModalContent } from './components/ModalContent';

import s from './OrderDetailsModal.module.scss';

export function OrderDetailsModal({ setActiveOrder, order }) {
	const handleClose = () => {
		setActiveOrder(false);
	};

	return (
		<Modal
			isOpen={!!order}
			onRequestClose={handleClose}
			className={s.orderDetailsModal}
			overlayClassName={s.modalOverlay}
		>
			<CloseModalIcon
				handleClose={handleClose}
				width={'22'}
				height={'22'}
				className={s.cross}
			/>
			<ModalContent order={order} />
		</Modal>
	);
}
