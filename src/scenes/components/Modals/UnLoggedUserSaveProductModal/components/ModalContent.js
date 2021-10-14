import React from 'react';

import s from '../UnLoggedUserSaveProductModal.module.scss';
import { ButtonsGroup } from './ButtonsGroup';

export function ModalContent({ handleClose }) {
	return (
		<div className={s.modalContent}>
			<div className={s.title}>{'To continue please register or log in'}</div>
			<ButtonsGroup handleClose={handleClose} />
		</div>
	);
}
