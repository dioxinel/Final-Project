import React, { useContext } from 'react';
import { Login } from './Auth/Login';
import { Register } from './Auth/Register';
import s from './AuthModal.module.scss';
import Modal from 'react-modal';
import Icon from '../../Icon';
import { AuthModalContext } from '../../../../App';

export function AuthModal() {
	const { isOpen, setIsOpen, modalCondition } = useContext(AuthModalContext);

	const handleClose = () => {
		setIsOpen(false);
	};

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={handleClose}
			className={`${s.modal} ${modalCondition ? s.modalLogin : s.modalRegister}`}
			overlayClassName={s.modalOverlay}
		>
			<Icon
				name={'cross'}
				onClick={handleClose}
				className={s.cross}
				width={'18'}
				height={'18'}
			/>
			{modalCondition ? <Login /> : <Register />}
		</Modal>
	);
}
