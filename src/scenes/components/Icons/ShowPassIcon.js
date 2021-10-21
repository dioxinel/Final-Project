import React from 'react';

import Icon from '../Icon';

import s from './Icons.module.scss';

export function ShowPassIcon({ handleClick, showPass, className = '' }) {
	return (
		<Icon
			name={showPass ? 'shown-pass' : 'hided-pass'}
			onClick={handleClick}
			className={`${s.showPassIcon} ${className}`}
		/>
	);
}
