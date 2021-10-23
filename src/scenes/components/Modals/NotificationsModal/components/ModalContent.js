import React, { useContext } from 'react';

import { NotificationItem } from './NotificationItem';

import s from '../NotificationsModal.module.scss';
import { NotificationsContext } from '../../../../../App';

export function ModalContent() {
	const { notifications } = useContext(NotificationsContext);
	return (
		<div className={s.modalContent}>
			{notifications.map((item) => {
				return <NotificationItem notification={item} key={item.text} />;
			})}
		</div>
	);
}
