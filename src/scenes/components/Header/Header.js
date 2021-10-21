import React from 'react';

import { AuthHeader } from './components/AuthHeader/AuthHeader';
import { Logo } from './components/Logo';

import s from './Header.module.scss';

export function Header() {
	return (
		<div className={s.header}>
			<Logo />
			<AuthHeader />
		</div>
	);
}
