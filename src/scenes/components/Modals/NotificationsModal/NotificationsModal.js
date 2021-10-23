import React, { useContext } from 'react';
import Modal from 'react-modal';

import { ModalContent } from './components/ModalContent';

import s from './NotificationsModal.module.scss';

import { NotificationsContext } from '../../../../App';

export function NotificationsModal() {
	const { notifications } = useContext(NotificationsContext);

	return (
		<Modal
			isOpen={!!notifications.length}
			className={s.modal}
			overlayClassName={s.overlay}
		>
			<ModalContent />
		</Modal>
	);
}
