import React from 'react';
import { Login } from './Auth/Login';
import { Register } from './Auth/Register';
import s from './AuthModal.module.scss';
import Modal from 'react-modal';
import Icon from '../../Icon';

export function AuthModal({ condition, setModalCondition, isOpen, setIsOpen }) {
	const handleClose = () => {
		setIsOpen(false);
	};

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={handleClose}
			className={`${s.modal} ${condition ? s.modalLogin : s.modalRegister}`}
			overlayClassName={s.modalOverlay}
		>
			<Icon name={'auth-cross'} onClick={handleClose} className={s.cross} />
			{condition ? (
				<Login condition={condition} setModalCondition={setModalCondition} />
			) : (
				<Register condition={condition} setModalCondition={setModalCondition} />
			)}
		</Modal>
	);
}
