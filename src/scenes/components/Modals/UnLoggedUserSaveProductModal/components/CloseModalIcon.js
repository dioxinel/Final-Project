import React from 'react';

import Icon from '../../../Icon';

import s from '../UnLoggedUserSaveProductModal.module.scss';

export function CloseModalIcon({ handleClose }) {
	return (
		<Icon
			name={'cross'}
			onClick={handleClose}
			width={'22'}
			height={'22'}
			className={s.cross}
		/>
	);
}
