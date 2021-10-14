import React from 'react';

import Icon from '../../../Icon';

import s from '../ProductModal.module.scss';

export function CloseModalIcon({ handleClose }) {
	return (
		<Icon
			name={'cross'}
			onClick={handleClose}
			width="25"
			height={'25'}
			className={s.cross}
		/>
	);
}
