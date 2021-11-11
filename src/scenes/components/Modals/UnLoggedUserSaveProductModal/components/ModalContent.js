import React from 'react';

import { ButtonsGroup } from './ButtonsGroup';

import s from '../UnLoggedUserSaveProductModal.module.scss';

export function ModalContent({ handleClose, handleBack }) {
	return (
		<div className={s.modalContent}>
			<h2 className={s.title}>{'To continue please register or log in'}</h2>
			<ButtonsGroup handleClose={handleClose} handleBack={handleBack} />
		</div>
	);
}
