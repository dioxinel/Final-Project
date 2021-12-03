import React, { useContext, useEffect, useRef, useState } from 'react';
import { Transition } from 'react-transition-group';

import { CloseModalIcon } from '../../../Icons/CloseModalIcon';

import s from '../NotificationsModal.module.scss';
import { NotificationsContext } from '../../../../../App';

export function NotificationItem({ notification }) {
	const { notifications, setNotifications } = useContext(NotificationsContext);
	const [isVisible, setVisible] = useState(true);
	const nodeRef = useRef(null);

	useEffect(() => {
		const timer = setTimeout(() => {
			setVisible(false);
		}, 3000);

		return () => {
			clearTimeout(timer);
		};
	}, [notification, notifications, setNotifications]);

	const duration = 1000;

	const defaultStyle = {
		transition: `opacity ${duration}ms ease-in-out`,
		opacity: 1,
	};

	const transitionStyles = {
		entering: { opacity: 1 },
		entered: { opacity: 1 },
		exiting: { opacity: 0 },
		exited: { opacity: 0 },
	};

	const handleClose = () => {
		setNotifications([
			...notifications.filter((item) => {
				return item !== notification;
			}),
		]);
	};

	return (
		<Transition
			in={isVisible}
			timeout={duration}
			nodeRef={nodeRef}
			onExited={handleClose}
		>
			{(state) => (
				<li
					ref={nodeRef}
					style={{
						...defaultStyle,
						...transitionStyles[state],
					}}
					className={`${s.notificationItem} ${
						notification.type === 'alert' ? s.alert : s.error
					}`}
				>
					<p className={s.notificationText}>{notification.text}</p>
					<CloseModalIcon
						handleClose={handleClose}
						width={'20'}
						height={'20'}
						className={s.closeNotification}
					/>
				</li>
			)}
		</Transition>
	);
}
