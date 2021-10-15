import React from 'react';

import { AuthHeader } from './AuthHeader/AuthHeader';
import { Logo } from './Logo';

import s from './Header.module.scss';

export function Header() {
	return (
		<div className={s.header}>
			<Logo />
			<AuthHeader />
		</div>
	);
}
