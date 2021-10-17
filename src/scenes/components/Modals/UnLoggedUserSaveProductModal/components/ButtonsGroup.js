import React, { useContext } from 'react';

import { AuthModalContext } from '../../../../../App';
import { Button1 } from '../../../Buttons/Button1';
import { Button2 } from '../../../Buttons/Button2';

import s from '../UnLoggedUserSaveProductModal.module.scss';

export function ButtonsGroup({ handleClose, handleBack }) {
	const { setIsOpen, setModalCondition } = useContext(AuthModalContext);
	const handleSignIn = () => {
		setIsOpen(true);
		setModalCondition(true);
		handleClose();
	};

	const handleRegister = () => {
		setIsOpen(true);
		setModalCondition(false);
		handleClose();
	};

	const handleContinueAsGuest = () => {
		handleBack();
	};

	return (
		<div className={s.buttonsGroup}>
			<Button1 text={'Continue to sign in'} handleClick={handleSignIn} />
			<Button1 text={'Continue to register'} handleClick={handleRegister} />
			<Button2 text={'Continue as guest'} handleClick={handleContinueAsGuest} />
		</div>
	);
}
