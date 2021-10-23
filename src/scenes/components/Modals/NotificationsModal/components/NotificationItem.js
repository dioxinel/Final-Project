import React, { useContext, useEffect, useState } from 'react';

import { CloseModalIcon } from '../../../Icons/CloseModalIcon';

import s from '../NotificationsModal.module.scss';
import { NotificationsContext } from '../../../../../App';

export function NotificationItem({ notification }) {
	const { notifications, setNotifications } = useContext(NotificationsContext);
	const [toggle, setToggle] = useState(false);

	useEffect(() => {
		const autoClose = () => {
			setToggle(true);
			setTimeout(() => {
				setNotifications([
					...notifications.filter((item) => {
						return item !== notification;
					}),
				]);
			}, 1500);
		};

		const timer = setTimeout(() => {
			autoClose();
		}, 3000);

		return () => {
			clearTimeout(timer);
		};
	}, [notification, notifications, setNotifications]);

	const handleClose = () => {
		setNotifications([
			...notifications.filter((item) => {
				return item !== notification;
			}),
		]);
	};

	return (
		<div
			className={`${s.notificationItem} ${
				notification.type === 'alert' ? s.alert : s.error
			}
      ${toggle ? s.fade : ''}`}
		>
			<div className={s.notificationText}>{notification.text}</div>
			<CloseModalIcon
				handleClose={handleClose}
				width={'20'}
				height={'20'}
				className={s.closeNotification}
			/>
		</div>
	);
}
