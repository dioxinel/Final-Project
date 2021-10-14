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
			<Icon
				name={'cross'}
				onClick={handleClose}
				className={s.cross}
				width={'18'}
				height={'18'}
			/>
			{condition ? (
				<Login
					condition={condition}
					setModalCondition={setModalCondition}
					setIsOpen={setIsOpen}
				/>
			) : (
				<Register
					condition={condition}
					setModalCondition={setModalCondition}
					setIsOpen={setIsOpen}
				/>
			)}
		</Modal>
	);
}
