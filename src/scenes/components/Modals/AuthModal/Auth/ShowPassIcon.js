import React from 'react';

import Icon from '../../../Icon';

import s from './Auth.module.scss';

export function ShowPassIcon({ handleClick, showPass }) {
	return (
		<Icon
			name={showPass ? 'shown-pass' : 'hided-pass'}
			onClick={handleClick}
			className={s.showPassIcon}
		/>
	);
}
