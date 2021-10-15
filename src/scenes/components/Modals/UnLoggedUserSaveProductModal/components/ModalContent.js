import React from 'react';

import { ButtonsGroup } from './ButtonsGroup';

import s from '../UnLoggedUserSaveProductModal.module.scss';

export function ModalContent({ handleClose }) {
	return (
		<div className={s.modalContent}>
			<div className={s.title}>{'To continue please register or log in'}</div>
			<ButtonsGroup handleClose={handleClose} />
		</div>
	);
}
