import React from 'react';
import { AuthHeader } from './AuthHeader/AuthHeader';
import s from './Header.module.scss';
import { HeaderBasketIcon } from './HeaderBasketIcon';
import { HeaderSavedIcon } from './HeaderSavedIcon';

export function RightPartHeader() {
	return (
		<div className={s.rightPartHeader}>
			<HeaderSavedIcon />
			<HeaderBasketIcon />
			<AuthHeader />
		</div>
	);
}
