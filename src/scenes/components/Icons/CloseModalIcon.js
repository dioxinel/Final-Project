import React from 'react';

import Icon from '../Icon';

export function CloseModalIcon({ handleClose, ...props }) {
	return (
		<Icon
			name={'cross'}
			onClick={handleClose}
			width='25'
			height={'25'}
			{...props}
		/>
	);
}
