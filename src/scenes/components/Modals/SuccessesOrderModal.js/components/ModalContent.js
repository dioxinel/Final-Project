import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Button1 } from '../../../Buttons/Button1';
import { Button2 } from '../../../Buttons/Button2';

import s from '../SuccessOrderModal.module.scss';

export function ModalContent({ handleClose }) {
	const store = useSelector((store) => store.viewer);
	const history = useHistory();

	const handleViewOrderHistory = () => {
		handleClose();
		history.push('/account/orders-history');
	};

	return (
		<div className={s.modalContent}>
			<div className={s.title}>{'Thank you for your purchase'}</div>
			<div className={s.notification}>
				{'We will send you a notification when your order arrives to you'}
			</div>
			<Button1 text={'Continue shopping'} handleClick={handleClose} />
			{store.isLoggedIn ? (
				<Button2
					text={'View order history'}
					handleClick={handleViewOrderHistory}
					className={s.button2}
				/>
			) : (
				''
			)}
		</div>
	);
}
